import React from "react";
import {
    NavLink,
    useRouteMatch
} from "react-router-dom";

import { classify } from "../index";

import "./index.scss"

const LanguageButtons = ({ data }) => {

    const match = useRouteMatch()

    return (
        <div className={"languageButtonContainer"}>

            {/* Map each language to a proper NavLink that changes the URL */}
            {Object.keys(data.languages).map((language, i) =>
                <NavLink
                    key={i}
                    to={location =>
                        location.pathname === `${match.url}/${language.toLowerCase()}` ?
                            `${match.url}` : `${match.url}/${language.toLowerCase()}`}
                    activeClassName={"activeLanguage"}
                    className={"languageButton"}
                    onClick={() =>
                        data.callback(data.preferred === language ? "" : language)}
                >
                    <div className={`${classify(language)}-circle  circle`}/>
                    <p className={classify(language) + "-border"}>
                        <span className={"languageText"}>{language}</span> (<span
                        className={"languageCount"}>{data.languages[language]}</span>)
                    </p>
                </NavLink>)
            }

            <NavLink
                to={`${match.url}`}
                className={"languageButton"}
                onClick={() => data.callback("")}
            ><p>All (<span
                className={"languageCount"}>{Object.keys(data.languages).reduce((acc, i) => acc + data.languages[i], 0)}</span>)
            </p>
            </NavLink>

        </div>
    )
}

export default LanguageButtons