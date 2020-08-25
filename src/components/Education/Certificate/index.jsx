import React from "react"
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
} from "react-router-dom";


const Certificate = () => {

    const match = useRouteMatch()

    return (
        <div className={"educationEntry"}>

            <div className={"header"}>

            </div>

            <h1>Certificate of Proficiency - Ethics, Justice & Law</h1>

            {/* Summary */}
            <p>Provided study in fundamental ethical theory and its application in moral, legal, social, and technological contexts. Completed alongside B.Sc. degree.</p>

            {/* Courses Taken */}
            <div>

                <div>
                    <ul>
                        <li>PHIL 233 - Ethical Theory</li>
                        <li>PHIL 236 - Ethics of Technology</li>
                        <li>PHIL 262 - Social and Political Philosophy</li>
                        <li>PHIL 333 - Metaethics: Morality, Objectivity, and Identity</li>
                        <li>PHIL 433 - Kantian Ethics</li>
                    </ul>

                </div>

            </div>

        </div>
    )
}

export default Certificate