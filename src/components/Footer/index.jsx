import React from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"

import "./index.scss"

const Footer = () => {

    let { section } = useParams();

    return (
        <div className={`footer ${section}`}>

            <div className={"left"}>
                <p>Viewing: {section}</p>
            </div>

            <div className={"mid"}>
                <button
                    onClick={() => {
                        window.scrollTo(0, 0)
                    }}
                >To Top</button>
                <p>Designed and <a
                        href={"https://github.com/bradendubois/personal-website-v3"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}> implemented</a> by <Link to={"/"}>me</Link>.</p>
            </div>

            <div className={"right"}>
                <button>Dark Mode</button>
            </div>

        </div>
    )
}

export default Footer