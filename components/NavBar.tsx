import React, {useContext, useState, useEffect} from "react"
import {HashLink as Link} from "react-router-hash-link"
import {useHistory} from "react-router-dom"
import favicon from "../assets/purple/favicon.png"
import faviconMagenta from "../assets/magenta/favicon.png"
import eyedropper from "../assets/purple/eyedropper.png"
import light from "../assets/purple/light.png"
import dark from "../assets/purple/dark.png"
import eyedropperPurpleLight from "../assets/purple-light/eyedropper.png"
import lightPurpleLight from "../assets/purple-light/light.png"
import darkPurpleLight from "../assets/purple-light/dark.png"
import eyedropperMagenta from "../assets/magenta/eyedropper.png"
import lightMagenta from "../assets/magenta/light.png"
import darkMagenta from "../assets/magenta/dark.png"
import eyedropperMagentaLight from "../assets/magenta-light/eyedropper.png"
import lightMagentaLight from "../assets/magenta-light/light.png"
import darkMagentaLight from "../assets/magenta-light/dark.png"
import search2 from "../assets/purple/search2.png"
import {ThemeContext, HideNavbarContext, HideSortbarContext, HideSidebarContext, EnableDragContext, 
RelativeContext, HideTitlebarContext, SearchContext, SearchFlagContext} from "../Context"
import "./styles/navbar.less"

const NavBar: React.FunctionComponent = (props) => {
    const {theme, setTheme} = useContext(ThemeContext)
    const {hideNavbar, setHideNavbar} = useContext(HideNavbarContext)
    const {hideTitlebar, setHideTitlebar} = useContext(HideTitlebarContext)
    const {hideSidebar, setHideSidebar} = useContext(HideSidebarContext)
    const {hideSortbar, setHideSortbar} = useContext(HideSortbarContext)
    const {enableDrag, setEnableDrag} = useContext(EnableDragContext)
    const {relative, setRelative} = useContext(RelativeContext)
    const {search, setSearch} = useContext(SearchContext)
    const {searchFlag, setSearchFlag} = useContext(SearchFlagContext)
    const [showMiniTitle, setShowMiniTitle] = useState(false)
    const history = useHistory()

    useEffect(() => {
        setShowMiniTitle(false)
    }, [])

    useEffect(() => {
        const scrollHandler = () => {
            if (hideTitlebar) {
                if (window.scrollY < 77) {
                    setShowMiniTitle(false)
                } else {
                    setShowMiniTitle(true)
                }
            }
        }
        window.addEventListener("scroll", scrollHandler)
        return () => {
            setTimeout(() => {
                window.removeEventListener("scroll", scrollHandler)
            }, 10)
        }
    })

    useEffect(() => {
        if (!hideTitlebar) {
                setShowMiniTitle(false)
        } else {
            if (window.scrollY > 77) {
                setShowMiniTitle(true)
            }
        }
    }, [hideTitlebar])

    const colorChange = () => {
        let newTheme = ""
        if (!theme || theme === "purple") {
            newTheme = "magenta"
            setTheme("magenta")
        }
        if (theme === "magenta") {
            newTheme = "purple"
            setTheme("purple")
        }
        if (theme === "purple-light") {
            newTheme = "magenta-light"
            setTheme("magenta-light")
        }
        if (theme === "magenta-light") {
            newTheme = "purple-light"
            setTheme("purple-light")
        }
        localStorage.setItem("theme", newTheme)
    }

    const lightChange = () => {
        let newTheme = ""
        if (!theme || theme === "purple") {
            newTheme = "purple-light"
            setTheme("purple-light")
        }
        if (theme === "magenta") {
            newTheme = "magenta-light"
            setTheme("magenta-light")
        }
        if (theme === "purple-light") {
            newTheme = "purple"
            setTheme("purple")
        }
        if (theme === "magenta-light") {
            newTheme = "magenta"
            setTheme("magenta")
        }
        localStorage.setItem("theme", newTheme)
    }

    const getEyeDropper = () => {
        if (theme === "purple") return eyedropper
        if (theme === "purple-light") return eyedropperPurpleLight
        if (theme === "magenta") return eyedropperMagenta
        if (theme === "magenta-light") return eyedropperMagentaLight
        return eyedropper
    }

    const getLight = () => {
        if (theme === "purple") return light
        if (theme === "purple-light") return darkPurpleLight
        if (theme === "magenta") return lightMagenta
        if (theme === "magenta-light") return darkMagentaLight
        return light
    }

    return (
        <div className={`navbar ${hideTitlebar ? "translate-navbar" : ""} ${hideSortbar && hideTitlebar && hideSidebar ? "hide-navbar" : ""} ${hideSortbar && hideNavbar && showMiniTitle ? "hide-navbar" : ""}
        ${relative ? "navbar-relative" : ""}`} onMouseEnter={() => setEnableDrag(false)} onMouseLeave={() => setEnableDrag(true)}>
            {showMiniTitle && !relative ? 
                <Link to="/" className="nav-mini-title-container">
                    <span className="nav-mini-title-a">M</span>
                    <span className="nav-mini-title-b">o</span>
                    <span className="nav-mini-title-a">e</span>
                    <span className="nav-mini-title-b">b</span>
                    <span className="nav-mini-title-a">o</span>
                    <span className="nav-mini-title-b">o</span>
                    <span className="nav-mini-title-a">r</span>
                    <span className="nav-mini-title-b">u</span>
                    <img className="nav-mini-img" src={theme.includes("magenta") ? faviconMagenta : favicon}/>
                </Link>
            : null}
            <div className="nav-text-container">
                <span style={{marginRight: showMiniTitle ? "45px" : "70px"}} className="nav-text nav-user-text" onClick={() => history.push("/login")}>Login</span>
                <span style={{marginRight: showMiniTitle ? "45px" : "70px"}} className="nav-text" onClick={() => history.push("/posts")}>Posts</span>
                <span style={{marginRight: showMiniTitle ? "45px" : "70px"}} className="nav-text" onClick={() => history.push("/comments")}>Comments</span>
                <span style={{marginRight: showMiniTitle ? "45px" : "70px"}} className="nav-text" onClick={() => history.push("/artists")}>Artists</span>
                <span style={{marginRight: showMiniTitle ? "45px" : "70px"}} className="nav-text" onClick={() => history.push("/characters")}>Characters</span>
                <span style={{marginRight: showMiniTitle ? "45px" : "70px"}} className="nav-text" onClick={() => history.push("/series")}>Series</span>
                <span style={{marginRight: showMiniTitle ? "45px" : "70px"}} className="nav-text" onClick={() => history.push("/tags")}>Tags</span>
                <span style={{marginRight: showMiniTitle ? "45px" : "70px"}} className="nav-text" onClick={() => history.push("/help")}>Help</span>
            </div>
            <div className="nav-color-container">
                <div className={`nav-search-container ${!hideSidebar ? "hide-nav-search" : ""}`}>
                    <img className="nav-search-icon" src={search2} onClick={() => setSearchFlag(true)}/>
                    <input className="nav-search" type="search" spellCheck={false} value={search} onChange={(event) => setSearch(event.target.value)} onKeyDown={(event) => event.key === "Enter" ? setSearchFlag(true) : null}/>
                </div>
                <img className="nav-color" src={getEyeDropper()} onClick={colorChange}/>
                <img className="nav-color" src={getLight()} onClick={lightChange}/>
            </div>
        </div>
    )
}

export default NavBar