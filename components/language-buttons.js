
// import { classify } from "../index";

const LanguageButtons = ({ ...props }) => {

    return (
        <div className={"languageButtonContainer"}>

            {/* Map each language to a proper NavLink that changes the URL */}
            {Object.keys(props.languages).map((language, i) =>
                <p
                    key={i}
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
                </p>)
            }

            <p
                className={"languageButton"}
                onClick={() => data.callback("")}
            ><p>All (<span
                className={"languageCount"}>{Object.keys(props.languages).reduce((acc, i) => acc + props.languages[i], 0)}</span>)
            </p>
            </p>

        </div>
    )
}

export default LanguageButtons