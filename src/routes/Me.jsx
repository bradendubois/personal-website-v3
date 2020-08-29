import React from "react";
import {Link} from "react-router-dom";

import "../components/Me/index.scss"

import me from "../assets/me.jpg"

import linkedin from "../assets/linkedin_alt_final.png"
import github from "../assets/GitHub-Mark-64px.png"
import email from "../assets/external_link.png"

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

        <h1>Hello!</h1>

        <div className={"main"}>

            <div>
                <img src={me} alt={"A headshot of myself"} />
            </div>

            <div>
                <h2>I'm Braden, a...</h2>
                <ul>
                    <li><Link to={"/education/undergraduate"}>Computer Science major</Link></li>
                    <li><Link to={"/education/undergraduate"}>Philosophy major</Link></li>
                    <li><Link to={"/education"}>Student Research Assistant</Link></li>
                    <li><Link to={"/projects/competitive-programming"}>Competitive programming hobbyist</Link></li>
                    <li><Link to={"/projects"}>Developer / Programmer</Link></li>
                    <li>Coffee snob <span aria-label={"coffee emoji"} role={"img"}>☕</span></li>
                </ul>
            </div>
        </div>

        <p>
            Hello, I'm Braden. I'm a 4th Year Computer Science / Philosophy Double Honours student at the
            University of Saskatchewan. My free time is usually spent making fun projects or doing competitive
            programming problems.
        </p>

        <p>
            Between classes and work I keep fairly busy, but my inbox is always open!
        </p>

        <div className={"bottom"}>
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

export default Me