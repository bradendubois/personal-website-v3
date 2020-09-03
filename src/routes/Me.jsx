import React from "react";
import {Link} from "react-router-dom";

import "../components/Me/index.scss"

import me from "../assets/me.jpg"

import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import email from "../assets/email.png"

const sources = [
    {
        url: "https://linkedin.com/in/bradendubois",
        img: linkedin,
        alt: "LinkedIn Logo"
    },
    {
        url: "https://github.com/bradendubois",
        img: github,
        alt: "Github Logo"
    },
    {
        url: "mailto:braden.dubois@usask.ca",
        img: email,
        alt: "Email Icon"
    }
]

const Me = () =>

    <div className={"me"}>

        <h1>bradendubois.dev</h1>

        <div className={"main"}>

            <div className={"headshot"}>
                <img src={me} alt={"A headshot of myself"} />
            </div>

            <div className={"desc"}>

                <p>
                    Hello, I'm Braden. I'm a <Link to={"/education/undergraduate"}>4th Year Computer Science / Philosophy Double Honours student</Link> at the
                    University of Saskatchewan. My free time is usually spent <Link to={"/projects"}>making fun projects</Link> or doing <Link to={"/projects/competitive-programming"}>competitive
                    programming problems</Link>.
                </p>

                <p>I am experienced with Python, web development (particularly React), as well as C++.</p>

                <p>Between classes and work I keep fairly busy, but <a href={"mailto:braden.dubois@usask.ca"}>my inbox is always open</a>!</p>

                <div className={"links"}>
                    <p>You can also find me in a few other places.</p>
                    <div>
                        {sources.map((s, i) =>
                            <a
                                key={i}
                                href={s.url}
                                target={"_blank"}
                                rel={"noopener noreferrer"}
                            >
                                <img src={s.img} alt={s.alt} />
                            </a>
                        )}
                    </div>
                </div>
                
            </div>
        </div>

    </div>

export default Me