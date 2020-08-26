import React from "react";
import {NavLink} from "react-router-dom";

import "./index.scss"

const NavBar = ({ view }) => {

    // const [darkMode, toggleDarkMode] = React.useState(false)

    return (
        <nav>
            {view.map((page, i) =>
                <NavLink
                    key={i}
                    to={page.path}
                    activeClassName={"active"}
                    className={`link ${page.display}`}
                >{page.display}</NavLink>
            )}
            {/*
            <button onClick={() => toggleDarkMode(!darkMode)}
            >{darkMode ? "Dark Mode" : "Light Mode"}</button>*/}
        </nav>
    )
}
export default NavBar