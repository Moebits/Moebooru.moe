import React, {useContext, useRef, useState, useReducer} from "react"
import {useHistory} from "react-router-dom"
import {ThemeContext, SessionContext} from "../Context"
import functions from "../structures/Functions"
import "./styles/thirdparty.less"
import Carousel from "./Carousel"

interface Props {
    posts: any
}

const ThirdParty: React.FunctionComponent<Props> = (props) => {
    const {theme, setTheme} = useContext(ThemeContext)
    const {session, setSession} = useContext(SessionContext)
    const history = useHistory()
    const images = props.posts.map((t: any) => functions.getThumbnailLink(t.post.images[0].type, t.postID, t.post.images[0].order, t.post.images[0].filename, "small"))

    const click = (img: string, index: number) => {
        const postID = props.posts[index].postID
        history.push(`/post/${postID}`)
    }

    return (
        <div className="third-party">
            <div className="third-party-title">Third Party Posts</div>
            <div className="third-party-container">
                <Carousel images={images} set={click} noKey={true}/>
            </div>
        </div>
    )
}

export default ThirdParty