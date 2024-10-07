import React, {useContext, useEffect, useRef, useState} from "react"
import {useHistory} from "react-router-dom"
import {ThemeContext, EnableDragContext, SessionContext, SessionFlagContext, EmojisContext,
QuoteTextContext, CommentIDContext, CommentJumpFlagContext, MobileContext} from "../Context"
import functions from "../structures/Functions"
import emojiSelect from "../assets/icons/emoji-select.png"
import Comment from "./Comment"
import "./styles/comments.less"

interface Props {
    post: any
}

const Comments: React.FunctionComponent<Props> = (props) => {
    const {theme, setTheme} = useContext(ThemeContext)
    const {enableDrag, setEnableDrag} = useContext(EnableDragContext)
    const {session, setSession} = useContext(SessionContext)
    const {sessionFlag, setSessionFlag} = useContext(SessionFlagContext)
    const {quoteText, setQuoteText} = useContext(QuoteTextContext)
    const {mobile, setMobile} = useContext(MobileContext)
    const [text, setText] = useState("")
    const [error, setError] = useState(false)
    const [comments, setComments] = useState([]) as any
    const [commentFlag, setCommentFlag] = useState(false)
    const {commentID, setCommentID} = useContext(CommentIDContext)
    const {commentJumpFlag, setCommentJumpFlag} = useContext(CommentJumpFlagContext)
    const {emojis, setEmojis} = useContext(EmojisContext)
    const [showEmojiDropdown, setShowEmojiDropdown] = useState(false)
    const errorRef = useRef(null) as any
    const emojiRef = useRef(null) as any
    const history = useHistory()

    useEffect(() => {
        const commentParam = new URLSearchParams(window.location.search).get("comment")
        const onDOMLoaded = async () => {
            if (commentParam) {
                await functions.timeout(500)
                setCommentID(Number(commentParam))
                setCommentJumpFlag(true)
            }
        }
        window.addEventListener("load", onDOMLoaded)
        return () => {
            window.removeEventListener("load", onDOMLoaded)
        }
    }, [])

    useEffect(() => {
        if (comments && commentID && commentJumpFlag) {
            onCommentJump(commentID)
            setCommentJumpFlag(false)
        }
    }, [comments, commentJumpFlag, commentID])

    const onCommentJump = async (commentID: number) => {
        let element = document.querySelector(`[comment-id="${commentID}"]`)
        if (!element) {
            await functions.timeout(1000)
            element = document.querySelector(`[comment-id="${commentID}"]`)
        }
        if (!element) return
        const position = element.getBoundingClientRect()
        const elementTop = position.top + window.scrollY
        window.scrollTo(0, elementTop - (window.innerHeight / 3))
        setCommentID(commentID)
    }

    useEffect(() => {
        if (commentID) history.replace(`${location.pathname}?comment=${commentID}`)
    }, [commentID])

    const updateComments = async () => {
        const comments = await functions.get("/api/post/comments", {postID: props.post.postID}, session, setSessionFlag)
        setComments(comments || [])
    }

    useEffect(() => {
        updateComments()
    }, [session, props.post])

    useEffect(() => {
        if (commentFlag) {
            setCommentFlag(false)
            updateComments()
        }
    }, [commentFlag, session])

    useEffect(() => {
        if (quoteText) {
            const prevText = text.trim() ? `${text.trim()}\n` : ""
            setText(`${prevText}${quoteText.trim()}`)
            setQuoteText(null)
            window.scrollTo(0, document.body.scrollHeight)
        }
    }, [quoteText])

    const post = async () => {
        if (!text) {
            setError(true)
            if (!errorRef.current) await functions.timeout(20)
            errorRef.current!.innerText = "No comment provided."
            await functions.timeout(2000)
            setError(false)
            return
        }
        const badComment = functions.validateComment(text)
        if (badComment) {
            setError(true)
            if (!errorRef.current) await functions.timeout(20)
            errorRef.current!.innerText = badComment
            await functions.timeout(2000)
            setError(false)
            return
        }
        setError(true)
        if (!errorRef.current) await functions.timeout(20)
        errorRef.current!.innerText = "Submitting..."
        try {
            await functions.post("/api/comment/create", {postID: props.post.postID, comment: text}, session, setSessionFlag)
            errorRef.current!.innerText = "Comment added."
            setCommentFlag(true)
            setText("")
            await functions.timeout(2000)
            setError(false)
        } catch {
            errorRef.current!.innerText = "Bad comment."
            await functions.timeout(2000)
            setError(false)
        }
    }

    const generateCommentsJSX = () => {
        let jsx = [] as any
        for (let i = 0; i < comments.length; i++) {
            jsx.push(<Comment key={comments[i].commentID} comment={comments[i]} onDelete={updateComments} onEdit={updateComments} onCommentJump={onCommentJump}/>)
        }
        return jsx
    }

    const keyDown = (event: any) => {
        event.stopPropagation()
    }

    useEffect(() => {
        const clickListener = () => {
            if (showEmojiDropdown) setShowEmojiDropdown(false)
        }
        window.addEventListener("click", clickListener)
        return () => {
            window.removeEventListener("click", clickListener)
        }
    }, [showEmojiDropdown])

    const getEmojiMarginRight = () => {
        if (typeof document === "undefined") return "0px"
        const rect = emojiRef.current?.getBoundingClientRect()
        if (!rect) return "0px"
        const raw = window.innerWidth - rect.right
        let offset = -145
        if (mobile) offset += 0
        return `${raw + offset}px`
    }

    const getEmojiMarginBottom = () => {
        if (typeof document === "undefined") return "0px"
        let elementName = ".comments-textarea"
        const bodyRect = document.querySelector(elementName)?.getBoundingClientRect()
        const rect = emojiRef.current?.getBoundingClientRect()
        if (!rect || !bodyRect) return "0px"
        const raw = bodyRect.bottom - rect.bottom
        let offset = 100
        if (mobile) offset += 0
        return `${raw + offset}px`
    }

    const emojiGrid = () => {
        let rows = [] as any
        let rowAmount = 7
        for (let i = 0; i < Object.keys(emojis).length; i++) {
            let items = [] as any
            for (let j = 0; j < rowAmount; j++) {
                const k = (i*rowAmount)+j
                const key = Object.keys(emojis)[k]
                if (!key) break
                const appendText = () => {
                    setText((prev: string) => prev + ` emoji:${key}`)
                    setShowEmojiDropdown(false)
                }
                items.push(
                    <img draggable={false} src={emojis[key]} className="emoji-big" onClick={appendText}/>
                )
            }
            if (items.length) rows.push(<div className="emoji-row">{items}</div>)
        }
        return (
            <div className={`emoji-grid ${showEmojiDropdown ? "" : "hide-emoji-grid"}`}
            style={{marginRight: getEmojiMarginRight(), marginBottom: getEmojiMarginBottom()}}>
                {rows}
            </div>
        )
    }

    const getCommentBox = () => {
        if (session.banned) return (
            <div className="comments-input-container">
                <span className="upload-ban-text" style={{fontSize: "20px"}}>You are banned. Cannot comment.</span>
            </div>
        )
        if (session.username) {
            return (
                <div className="comments-input-container">
                    <div className="comments-row-start" onMouseEnter={() => setEnableDrag(false)} onMouseLeave={() => setEnableDrag(true)}>
                        <textarea className="comments-textarea" spellCheck={false} value={text} onChange={(event) => setText(event.target.value)} onKeyDown={keyDown}></textarea>
                    </div>
                    {error ? <div className="comments-validation-container"><span className="comments-validation" ref={errorRef}></span></div> : null}
                    <div className="comments-button-container-left">
                    <button className="comments-button" onClick={post}>Post</button>
                    <button className="comments-emoji-button" ref={emojiRef} onClick={() => setShowEmojiDropdown((prev: boolean) => !prev)}>
                        <img src={emojiSelect}/>
                    </button>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="comments">
            <div className="comments-title">Comments</div>
            {comments.length ? generateCommentsJSX() :
            <div className="comments-text">There are no comments.</div>}
            {getCommentBox()}
            {emojiGrid()}
        </div>
    )
}

export default Comments