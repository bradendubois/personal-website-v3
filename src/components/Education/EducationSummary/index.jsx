import React from "react";
import { Link } from "react-router-dom";

import "./index.scss"
import "../index.scss"

const EducationSummary = () =>

    <div className={"educationSummaryContainer"}>

        <h1>Education</h1>

        <div>
            <Link to={"/education/undergraduate"}><h2>Undergraduate - B.Sc. (Double Honours)</h2></Link>

            <p>
                Currently a 4th Year student, pursuing a a Bachelor's of Science, Double Honours, at the
                University of Saskatchewan, majoring in Computer Science (Major 1) and Philosophy (Major 2). During
                this time, I also completed the requirements for a <Link to={"/education/undergraduate"}>Certificate
                of Proficiency in Ethics, Justice & Law</Link>.
            </p>

            <p>TODO - Course focus description</p>
            <p>TODO - Work description</p>
            <p>TODO - Achievements description</p>
            <p>TODO - Groups description</p>
        </div>
    </div>

export default EducationSummary