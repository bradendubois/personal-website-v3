import React from "react";
import {
    NavLink,
    Link
} from "react-router-dom";

import "./index.scss"

import Resume from "../../assets/Resume_BradenDubois.pdf"

const NavBar = ({ view }) => {

    // const [darkMode, toggleDarkMode] = React.useState(false)

    return (

        <div className={"navHeader"}>

            <Link
                to={Resume}
                target={"_blank"}
                className={"resume"}
                rel={"noopener noreferrer"}
            >Resume</Link>

            <nav>
                {view.map((page, i) =>
                    <NavLink
                        key={i}
                        to={page.path}
                        activeClassName={"active"}
                        className={`link ${page.display}`}
                    >{page.display}</NavLink>
                )}
            </nav>

        </div>
    )
}
export default NavBar