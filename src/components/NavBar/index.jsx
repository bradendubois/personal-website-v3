import React from "react";
import {NavLink} from "react-router-dom";

import "./index.scss"

const NavBar = ({ view }) => {

    const [darkMode, toggleDarkMode] = React.useState(false)

    return (
        <nav>
            <div>
            {view.map((page, i) =>
                <NavLink
                    key={i}
                    exact to={page.path}
                    activeClassName={"active"}
                    className={"link"}
                >{page.display}</NavLink>
            )}
            </div>
            {/*
            <button onClick={() => toggleDarkMode(!darkMode)}
            >{darkMode ? "Dark Mode" : "Light Mode"}</button>*/}
        </nav>
    )
}
export default NavBar