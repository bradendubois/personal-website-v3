import React from "react"
import {
    Link,
    NavLink,
    useRouteMatch
} from "react-router-dom";

import "../index.scss"
import "./index.scss"

import usask_logo from "../../../assets/usask.jpg"

const Undergraduate = () => {

    const match = useRouteMatch()

    return (
        <div className={"educationEntry undergraduate"}>

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


            <div className={"header undergraduateHeader"}>

                <h1>B.Sc. (Double Honours)</h1>
                <h2>Computer Science & Philosophy</h2>

                <p>Also did a <Link to={"/education/certificate"}>Certificate</Link>.</p>
            </div>

            <div className={"programDetail undergraduateDetail"}>
                <p>2017 - 2022</p>
                <p>Saskatoon, SK</p>
            </div>


            {/* Summary */}

            {/* Courses Taken */}
            <div className={"itemSide undergraduateCoursesSide"} >
                <NavLink
                    to={location =>
                        location.pathname === `${match.url}/courses` ?
                            `${match.url}` : `${match.url}/courses`
                    }
                    activeClassName={"activeItemSide"}
                >Relevant Courses</NavLink>
            </div>
            <div className={"itemContent undergraduateCoursesContent"}>

                <h4>Computer Science</h4>
                <ul>
                    <li>CMPT 141 - Intro. to Computer Science</li>
                    <li>CMPT 145 - Principles of Computer Science</li>
                    <li>CMPT 214 - Programming Principles and Practice</li>
                    <li>CMPT 215 - Intro. to Computer Organization and Architecture</li>
                    <li>CMPT 260 - Mathematical Logic and Computing</li>
                    <li>CMPT 270 - Developing Object-Oriented Systems</li>
                    <li>CMPT 280 - Intermediate Data Structures and Algorithms</li>
                    <li>CMPT 317 - Intro. to Artificial Intelligence</li>
                    <li>CMPT 360 - Machines and Algorithms</li>
                    <li>CMPT 364 - Automata and Formal Language</li>
                    <li>CMPT 370 - Intermediate Software Engineering</li>
                </ul>

                <h4>Philosophy</h4>
                <ul>
                    <li>PHIL 120 - Knowledge, Mind, and Existence</li>
                    <li>PHIL 133 - Intro. to Ethics and Values</li>
                    <li>PHIL 232 - Ethics and Professional Responsibility in Computer Science</li>
                    <li>PHIL 233 - Ethical Theory</li>
                    <li>PHIL 236 - Ethics and Technology</li>
                    <li>PHIL 262 - Social and Political Philosophy</li>
                    <li>PHIL 298 - Philosophy of Emotions</li>
                    <li>PHIL 333 - Metaethics: Morality, Objectivity, and Identity</li>
                    <li>PHIL 433 - Kantian Ethics</li>
                </ul>
            </div>

            {/* Experience */}

            {/* Achievements */}
            <div className={"itemSide undergraduateAchievementsSide"} >
                <NavLink
                    to={location =>
                        location.pathname === `${match.url}/achievements` ?
                            `${match.url}` : `${match.url}/achievements`
                    }
                    activeClassName={"activeItemSide"}
                >Achievements</NavLink>
            </div>
            <div className={"itemContent undergraduateAchievementsContent"}>

                {/* CS USRA */}
                <div>
                    <h3>Computer Science USRA</h3>
                    <h4>Summer 2020</h4>
                    <p>Recipient of a Department of Computer Science Undergraduate Student Research Assistant
                        award. Working with Professor Eric Neufeld for the summer of 2020.</p>
                </div>

                {/* Competitive Programming */}
                <div>
                    <h3>Competitive Programming</h3>
                    <h4>Fall 2019</h4>
                    <p>Winning team of the Advanced category for the Local Qualifier in the ACM
                        Inter-Collegiate Programming Contest at the University of Saskatchewan. Competed in the
                        Rocky Mountain Regional Qualifier in Edmonton in October 2019, placing 23rd of ~70
                        teams.</p>
                </div>

                {/* Unix Bootcamps */}
                <div>
                    <h3>Unix Bootcamp Presentations</h3>
                    <h4>Fall 2019</h4>
                    <p>Co-prepared and delivered intermediate-level presentations for the CSSS's Unix Bootcamp.</p>
                </div>
            </div>

            {/* Groups / Societies */}
            <div className={"itemSide undergraduateGroupsSide"} >
                <NavLink
                    to={location =>
                        location.pathname === `${match.url}/groups` ?
                            `${match.url}` : `${match.url}/groups`
                    }
                    activeClassName={"activeItemSide"}
                >Groups & Societies</NavLink>
            </div>
            <div className={"itemContent undergraduateGroupsContent"}>
                <div>
                    <h3>Arts and Science Students' Union</h3>
                    <h4>Technical Manager</h4>
                    <h4>2017 - Present</h4>
                    <ul>
                        <li>Responsible for maintaining the ASSU website (assu.usask.ca).</li>
                        <li>General technical support.</li>
                    </ul>
                </div>

                <div>
                    <h3>Cyber Security Team</h3>
                    <h4>Member</h4>
                    <h4>2019 - Present</h4>
                </div>

                <div>
                    <h3>Computer Science Students' Society</h3>
                    <h4>Member</h4>
                    <h4>2017 - Present</h4>
                </div>

                <div>
                    <h3>Competitive Programming Club</h3>
                    <h4>Member</h4>
                    <h4>2019 - Present</h4>
                </div>
            </div>

        </div>
    )
}

export default Undergraduate