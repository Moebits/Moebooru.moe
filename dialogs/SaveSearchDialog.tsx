import React, {useEffect, useContext, useState, useRef} from "react"
import {useHistory} from "react-router-dom"
import {ThemeContext, EnableDragContext, SaveSearchDialogContext, SessionContext, SiteHueContext,
SiteLightnessContext, SiteSaturationContext, SessionFlagContext, SearchContext} from "../Context"
import functions from "../structures/Functions"
import uploadIcon from "../assets/icons/upload.png"
import "./styles/dialog.less"
import Draggable from "react-draggable"
import SearchSuggestions from "../components/SearchSuggestions"
import ContentEditable from "react-contenteditable"
import xButton from "../assets/icons/x-button.png"

const SaveSearchDialog: React.FunctionComponent = (props) => {
    const {theme, setTheme} = useContext(ThemeContext)
    const {siteHue, setSiteHue} = useContext(SiteHueContext)
    const {siteSaturation, setSiteSaturation} = useContext(SiteSaturationContext)
    const {siteLightness, setSiteLightness} = useContext(SiteLightnessContext)
    const {enableDrag, setEnableDrag} = useContext(EnableDragContext)
    const {saveSearchDialog, setSaveSearchDialog} = useContext(SaveSearchDialogContext)
    const {session, setSession} = useContext(SessionContext)
    const {sessionFlag, setSessionFlag} = useContext(SessionFlagContext)
    const {search, setSearch} = useContext(SearchContext)
    const [error, setError] = useState(false)
    const [tagActive, setTagActive] = useState(false)
    const [posX, setPosX] = useState(0)
    const [posY, setPosY] = useState(0)
    const [tagX, setTagX] = useState(0)
    const [tagY, setTagY] = useState(0)
    const [name, setName] = useState("")
    const [tags, setTags] = useState("")
    const errorRef = useRef<any>(null)
    const tagRef = useRef<any>(null)
    const history = useHistory()

    useEffect(() => {
        document.title = "Save Search"

        const logPosition = (event: any) => {
            const element = document.querySelector(".dialog-box")
            if (!element) return
            const rect = element.getBoundingClientRect()
            setPosX(event.clientX - rect.left - 10)
            setPosY(event.clientY - rect.top + 10)
        }
        window.addEventListener("mousemove", logPosition)
        return () => {
            window.removeEventListener("mousemove", logPosition)
        }
    }, [])

    const initItems = () => {
        if (saveSearchDialog) {
            const nameString = search.split(/ +/g).map((s: string) => s.split("-")[0]).join(" ")
            setName(nameString)
            setTags(search)
        } else {
            setName("")
            setTags("")
        }
    }

    useEffect(() => {
        if (saveSearchDialog) {
            // document.body.style.overflowY = "hidden"
            document.body.style.pointerEvents = "none"
        } else {
            // document.body.style.overflowY = "visible"
            document.body.style.pointerEvents = "all"
            setEnableDrag(true)
        }
        initItems()
    }, [saveSearchDialog])

    const saveSearch = async () => {
        if (!name) {
            setError(true)
            if (!errorRef.current) await functions.timeout(20)
            errorRef.current!.innerText = "Name is required."
            await functions.timeout(2000)
            return setError(false)
        }
        if (!tags) {
            setError(true)
            if (!errorRef.current) await functions.timeout(20)
            errorRef.current!.innerText = "Tags are required."
            await functions.timeout(2000)
            return setError(false)
        }
        await functions.post("/api/user/savesearch", {name, tags}, session, setSessionFlag)
        setSessionFlag(true)
    }

    const click = (button: "accept" | "reject") => {
        if (button === "accept") {
            saveSearch()
        } 
        setSaveSearchDialog(false)
    }

    useEffect(() => {
        const tagX = posX
        const tagY = posY
        setTagX(tagX)
        setTagY(tagY)
    }, [tags])

    useEffect(() => {
        if (tagActive) {
            const tagX = posX
            const tagY = posY
            setTagX(tagX)
            setTagY(tagY)
        }
    }, [tagActive])

    const handleTagClick = (tag: string) => {
        setTags((prev: string) => {
            const parts = functions.cleanHTML(prev).split(/ +/g)
            parts[parts.length - 1] = tag
            return parts.join(" ")
        })
    }

    if (saveSearchDialog) {
        return (
            <div className="dialog">
                <Draggable handle=".dialog-title-container">
                <div className="dialog-box" style={{marginTop: "-30px"}} onMouseEnter={() => setEnableDrag(false)} onMouseLeave={() => setEnableDrag(true)}>
                    <div className="dialog-container">
                        <div className="dialog-title-container">
                            <span className="dialog-title">Save Search</span>
                        </div>
                        <div className="dialog-row">
                            <span className="dialog-text">Name: </span>
                            <input className="dialog-input-taller" type="text" spellCheck={false} value={name} onChange={(event) => setName(event.target.value)} style={{width: "max-content"}}/>
                        </div>
                        <div className="dialog-row">
                            <span className="dialog-text">Tags: </span>
                        </div>
                        <div className="dialog-row">
                            <SearchSuggestions active={tagActive} text={functions.cleanHTML(tags)} x={tagX} y={tagY} width={200} click={handleTagClick} type="all"/>
                            <ContentEditable innerRef={tagRef} className="dialog-textarea-small" spellCheck={false} html={tags} onChange={(event) => setTags(event.target.value)} onFocus={() => setTagActive(true)} onBlur={() => setTagActive(false)}/>
                        </div>
                        {error ? <div className="dialog-validation-container"><span className="dialog-validation" ref={errorRef}></span></div> : null}
                        <div className="dialog-row">
                            <button onClick={() => click("reject")} className="dialog-button">{"Cancel"}</button>
                            <button onClick={() => click("accept")} className="dialog-button">{"Save"}</button>
                        </div>
                    </div>
                </div>
                </Draggable>
            </div>
        )
    }
    return null
}

export default SaveSearchDialog