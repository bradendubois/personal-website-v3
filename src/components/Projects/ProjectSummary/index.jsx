import React from "react";
import {Link, useRouteMatch} from "react-router-dom";

import "./index.scss"

const ProjectSummary = () => {

    const match = useRouteMatch()

    return (
        <div className={"projectSummary"}>

            <h1>Projects / Portfolio</h1>
            <hr />

            <p>
                My personal projects are based on interest and range
                from  an <a
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    href={"https://github.com/bradendubois/automata"}>automata processor</a>, to
                an <a
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    href={"https://github.com/bradendubois/animal-crossing-nh-villager-tracker"}>Electron-based video
                game information client</a>, and I am currently interested in <em>web-based</em> technologies
                such as React to develop Progressive Web Apps.
            </p>

            <h2>Research</h2>
            <p>I have worked as a <em>research assistant</em> under the supervision of <a
                href={"https://www.cs.usask.ca/faculty/eric/"}
                target={"_blank"}
                rel={"noopener noreferrer"}
            >Dr. Eric Neufeld</a> since May 2020. This research has been focused primarily on the work of Judea Pearl
                on causal inference in statistics. It is possible that some of this work will be made public in the future.
            </p>

            <Link to={`${match.url}/github`}><h2>Personal Projects</h2></Link>
            <p>
                Almost all of my publicly-available projects are hosted on my Github (<a
                href={"https://github.com/bradendubois"} target={"_blank"} rel={"noopener noreferrer"}>/bradendubois</a>), though
                you can find a fun breakdown of them in the <Link to={`${match.url}/github`}>Github section of
                this site</Link>; it uses the <a href={"https://developer.github.com/v3/"} target={"_blank"} rel={"noopener noreferrer"}
                >Github REST API</a> to accomplish this.
            </p>

            <Link to={`${match.url}/competitive-programming`}><h2>Competitive Programming</h2></Link>
            <p>
                A fun hobby that I enjoy and recommend to others is competitive programming. I am relatively active
                on <a href={"https://open.kattis.com"} target={"_blank"} rel={"noopener noreferrer"}>Kattis</a> and <a
                href={"https://open.kattis.com/users/bradendubois"} target={"_blank"} rel={"noopener noreferrer"}>I
                am in the top 800 worldwide</a>. I have competed in the <a href={"https://icpc.global/"} target={"_blank"}
                rel={"noopener noreferrer"}>ICPC ACM</a> and advanced to the Regional Qualifier in 2019. I keep a
                collection of my own <a href={"https://github.com/bradendubois/competitive-programming"}
                target={"_blank"} rel={"noopener noreferrer"}>personal solutions</a> as a bit of a portfolio.
                I also use this as an opportunity to practice writing fast C++ code.
            </p>

        </div>
    )
}

export default ProjectSummary