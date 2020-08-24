import {NavLink} from "react-router-dom";
import React from "react";


const NavBar = ({ view }) =>

    <ul>
        {view.map((page, i) =>
            <li key={i}>
                <NavLink
                    exact to={page.path}
                    activeClassName={"active"}
                >{page.display}</NavLink>
            </li>
        )}
    </ul>


export default NavBar