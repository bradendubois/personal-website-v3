import React from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"

import "./index.scss"

import up from "../../assets/up.png"

const Footer = () => {

    let { section } = useParams();

    return (
        <div className={`footer ${section}`}>

            <div>
                <img onClick={() => {
                    window.scrollTo(0, 0)
                }} src={up} alt={"Scroll to top"} />
            </div>

            <div>
                <p>Designed and <a
                        href={"https://github.com/bradendubois/personal-website-v3"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}> implemented</a> by <Link to={"/"}>me</Link>.</p>
            </div>

            <div>
                <button>Dark Mode</button>
            </div>

        </div>
    )
}

export default Footer