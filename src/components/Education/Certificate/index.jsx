import React from "react"
import {
    NavLink,
    Link,
    useRouteMatch
} from "react-router-dom";

import "../index.scss"
import "./index.scss"

import usask_logo from "../../../assets/usask.jpg";

const Certificate = () => {

    const match = useRouteMatch()

    return (
        <div className={"educationEntry certificate"}>

            <a
                href={"https://www.usask.ca"}
                target={"_blank"}
                rel={"noopener noreferrer"}
            >
                <img
                    src={usask_logo}
                    alt={"Logo of the University of Saskatchewan"}
                />
            </a>

            <div className={"header certificateHeader"}>

                <h1>Certificate of Proficiency - Ethics, Justice & Law</h1>

                {/* Summary */}
                <p>Provided study in fundamental ethical theory and its application in moral, legal, social, and technological contexts. Completed alongside <Link to={"/education/undergraduate"}>B.Sc. degree</Link>.</p>

            </div>

            {/* Courses Taken */}
            <div className={"itemSide certificateCoursesSide"}>

                <NavLink
                    to={location =>
                        location.pathname === `${match.url}/courses` ?
                            `${match.url}` : `${match.url}/courses`
                    }
                    activeClassName={"activeItemSide"}
                >Required Courses</NavLink>

            </div>

            <div className={"itemContent certificateCoursesContent"}>

                <h4>Required Courses</h4>
                <ul>
                    <li>PHIL 233 - Ethical Theory</li>
                    <li>PHIL 236 - Ethics of Technology</li>
                    <li>PHIL 262 - Social and Political Philosophy</li>
                    <li>PHIL 333 - Metaethics: Morality, Objectivity, and Identity</li>
                    <li>PHIL 433 - Kantian Ethics</li>
                </ul>

            </div>

        </div>
    )
}

export default Certificate