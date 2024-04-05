import React, {useEffect, useContext, useState, useRef} from "react"
import {useHistory} from "react-router-dom"
import {HashLink as Link} from "react-router-hash-link"
import {HideNavbarContext, HideSidebarContext, ThemeContext, EnableDragContext, ShowNewThreadDialogContext, HideTitlebarContext, 
SessionContext, SiteHueContext, SiteLightnessContext, SiteSaturationContext} from "../Context"
import functions from "../structures/Functions"
import uploadIcon from "../assets/icons/upload.png"
import fileType from "magic-bytes.js"
import Draggable from "react-draggable"
import permissions from "../structures/Permissions"
import xButton from "../assets/icons/x-button-magenta.png"
import "./styles/newthreaddialog.less"
import axios from "axios"

const NewThreadDialog: React.FunctionComponent = (props) => {
    const {theme, setTheme} = useContext(ThemeContext)
    const {siteHue, setSiteHue} = useContext(SiteHueContext)
    const {siteSaturation, setSiteSaturation} = useContext(SiteSaturationContext)
    const {siteLightness, setSiteLightness} = useContext(SiteLightnessContext)
    const {hideNavbar, setHideNavbar} = useContext(HideNavbarContext)
    const {hideTitlebar, setHideTitlebar} = useContext(HideTitlebarContext)
    const {hideSidebar, setHideSidebar} = useContext(HideSidebarContext)
    const {enableDrag, setEnableDrag} = useContext(EnableDragContext)
    const {showNewThreadDialog, setShowNewThreadDialog} = useContext(ShowNewThreadDialogContext)
    const {session, setSession} = useContext(SessionContext)
    const [threadTitle, setThreadTitle] = useState("")
    const [threadContent, setThreadContent] = useState("")
    const [captchaResponse, setCaptchaResponse] = useState("")
    const [captcha, setCaptcha] = useState("")
    const [error, setError] = useState(false)
    const errorRef = useRef<any>(null)
    const history = useHistory()

    const getFilter = () => {
        return `hue-rotate(${siteHue - 180}deg) saturate(${siteSaturation}%) brightness(${siteLightness + 70}%)`
    }

    const getCaptchaColor = () => {
        if (theme.includes("light")) return "#ffffff"
        return "#09071c"
    }

    const updateCaptcha = async () => {
        const captcha = await axios.get("/api/misc/captcha/create", {params: {color: getCaptchaColor()}, withCredentials: true}).then((r) => r.data)
        setCaptcha(captcha)
        setCaptchaResponse("")
    }

    useEffect(() => {
        updateCaptcha()
    }, [theme])

    useEffect(() => {
        document.title = "Moebooru: New Thread"
    }, [])

    useEffect(() => {
        if (showNewThreadDialog) {
            document.body.style.pointerEvents = "none"
        } else {
            document.body.style.pointerEvents = "all"
            setEnableDrag(true)
        }
    }, [showNewThreadDialog])

    const newThread = async () => {
        try {
            await axios.post("/api/thread/create", {title: threadTitle, content: threadContent, captchaResponse}, {headers: {"x-csrf-token": functions.getCSRFToken()}, withCredentials: true})
            setShowNewThreadDialog(false)
            history.go(0)
        } catch {
            setError(true)
            if (!errorRef.current) await functions.timeout(20)
            errorRef.current!.innerText = "Bad content or captcha."
            await functions.timeout(2000)
            setError(false)
            updateCaptcha()
            setCaptchaResponse("")
        }
    }

    const click = (button: "accept" | "reject") => {
        if (button === "accept") {
            newThread()
        } else {
            setShowNewThreadDialog(false)
        }
    }

    if (showNewThreadDialog) {
        return (
            <div className="new-thread-dialog">
                <Draggable handle=".new-thread-dialog-title-container">
                <div className="new-thread-dialog-box" onMouseEnter={() => setEnableDrag(false)} onMouseLeave={() => setEnableDrag(true)}>
                    <div className="new-thread-container">
                        <div className="new-thread-dialog-title-container">
                            <span className="new-thread-dialog-title">New Thread</span>
                        </div>
                        <div className="new-thread-dialog-row">
                            <span className="new-thread-dialog-text">Title: </span>
                            <input className="new-thread-dialog-input" type="text" spellCheck={false} value={threadTitle} onChange={(event) => setThreadTitle(event.target.value)}/>
                        </div>
                        <div className="new-thread-dialog-row">
                            <span className="new-thread-dialog-text">Content: </span>
                        </div>
                        <div className="new-thread-dialog-row">
                            <textarea className="new-thread-textarea" spellCheck={false} value={threadContent} onChange={(event) => setThreadContent(event.target.value)}></textarea>
                        </div>
                            <div className="new-thread-dialog-row" style={{pointerEvents: "all"}}>
                                <img src={`data:image/svg+xml;utf8,${encodeURIComponent(captcha)}`} style={{filter: getFilter()}}/>
                                <input className="new-thread-dialog-input" type="text" spellCheck={false} value={captchaResponse} onChange={(event) => setCaptchaResponse(event.target.value)}/>
                            </div>
                        {error ? <div className="new-thread-dialog-validation-container"><span className="new-thread-dialog-validation" ref={errorRef}></span></div> : null}
                        <div className="new-thread-dialog-row">
                            <button onClick={() => click("reject")} className="new-thread-button">{"Cancel"}</button>
                            <button onClick={() => click("accept")} className="new-thread-button">{"Post"}</button>
                        </div>
                    </div>
                </div>
                </Draggable>
            </div>
        )
    }
    return null
}

export default NewThreadDialog