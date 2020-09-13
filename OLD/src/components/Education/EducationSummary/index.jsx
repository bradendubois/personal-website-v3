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

            <p>Since May 2020, I have worked as  <em>Research Assistant</em> under the supervision of <a
                href={"https://www.cs.usask.ca/faculty/eric/"}
                target={"_blank"}
                rel={"noopener noreferrer"}
            >Dr. Eric Neufeld</a>.</p>

        </div>
    </div>

export default EducationSummary