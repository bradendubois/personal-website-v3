import React from "react"
import { InlineMath } from "react-katex"

import "./index.scss"

const CompetitiveProgramming = () =>

    <div className={"competitiveProgrammingContent"}>

        <h1>Competitive Programming</h1>

        <p>
            Since discovering it in Fall 2019, I've enjoyed competitive programming as a hobby, way to compete against
            both myself and others, as well as practice writing high-performance, quality code. It's a great way to
            test one's own skills as well as gain experience with a given language.
        </p>

        <p>
            In Fall 2019, as part of a challenge to obtain some bonus marks in an algorithms class, myself and two of
            my friends formed a team and won the Local Qualifier in the Advanced Category at the University of Saskatchewan.
            We competed in the Rocky Mountain Regional Qualifier in October 2019, making it to the
            upper <InlineMath math={"\\frac{1}{3}"} /> - we're very proud for our first time. Go team <em>CMPT 360 Bonus Marks</em>!
        </p>

        <p>
            Since then, I've begun and maintained a repository of my <a
                href={"https://github.com/bradendubois/competitive-programming"}
                target={"_blank"}
                rel={"noopener noreferrer"}
            >solutions</a> to various <a
                href={"https://open.kattis.com/"}
                target={"_blank"}
                rel={"noopener noreferrer"}
            >Kattis</a> problems.
        </p>

        <h2>Advent of Code</h2>

        <p>
            For all the same reasons as above, I also maintain a <a
                href={"https://github.com/bradendubois/advent-of-code"}
                target={"_blank"}
                rel={"noopener noreferrer"}
            >repository of solutions</a> to various <a
                href={"https://adventofcode.com"}
                target={"_blank"}
                rel={"noopener noreferrer"}
            >Advent of Code</a> problems. It's great for all the same reasons, with the added bonus of being
            wonderfully <span className={"festive"}>festive</span>.
        </p>

    </div>

export default CompetitiveProgramming