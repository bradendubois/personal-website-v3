import React from "react";
import {
    NavLink,
    Link
} from "react-router-dom";

import "./index.scss"

import Resume from "../../assets/Resume_BradenDubois.pdf"

const NavBar = ({ view }) => {

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
                        isActive={(match, location) => {
                            // Special case to highlight "Me" even on no page selected
                            if (page.display === "Me") {
                                return location.pathname === "/" || location.pathname === "/me"
                            } return match
                        }}
                        activeClassName={"active"}
                        className={`link ${page.display}`}
                    >{page.display}</NavLink>
                )}
            </nav>

        </div>
    )
}
export default NavBar