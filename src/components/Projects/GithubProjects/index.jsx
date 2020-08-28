import React, { useEffect } from "react";
import loadable from "@loadable/component"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useRouteMatch,
    Redirect
} from "react-router-dom";

import { InlineMath } from 'react-katex';

import "./index.scss"

const Project = loadable(() => import("./Project"))

const classify = (language) => {

    switch (language) {
        case "C++":
            return "CPP"
        default:
            return language
    }
}

const GithubProjects = () => {

    let match = useRouteMatch()

    const [results, setResults] = React.useState([])
    const [upperLimit, setLimit] = React.useState(5)
    const [languages, setLanguages] = React.useState([])
    const [preferred, setPreferred] = React.useState("")

    useEffect(() => {
        fetch("https://api.github.com/users/bradendubois/repos")
            .then(response => {

                switch (response.status) {

                    // All okay
                    case 200:

                        // Turn to JSON
                        response.json()

                            // Sort, newest to oldest
                            .then(repos => {
                                repos.sort((a, b) => {
                                    let a_t = a["updated_at"].substring(0, a["updated_at"].length-1)
                                    let b_t = b["updated_at"].substring(0, b["updated_at"].length-1)
                                    return Date.parse(b_t) - Date.parse(a_t)
                                }); return repos
                            })

                            // Save sorted, count/save languages
                            .then(sorted => {
                                setResults(sorted)
                                let cur = {}
                                for (let project of sorted) {
                                    if (!project["language"]) continue
                                    if (!Object.keys(cur).includes(project["language"])) {
                                        cur[project["language"]] = 1
                                    } else {
                                        cur[project["language"]]++
                                    }
                                }
                                setLanguages(cur)
                            })
                        break

                    // Rate limited - too many queries
                    case 403:
                        console.log("Rate limited - uh oh! Wait an hour.")
                        setResults(<h1>Rate limited - try again in an hour.</h1>)
                        break

                    // Default case
                    default:
                        console.log("No plan for response code:", response.status)
                        break
                }
            })
    }, [])

    return (
        <Router>

            <div className={"githubProjectContent"}>

                <div>
                    <p>This is accomplished using the Github REST API; requests are rate-limited to 60/hour. The
                        repository summary for a user lists the <strong>primary</strong> language for each repository,
                        whereas a detailed breakdown by repository requires a query <i>per</i> repository. This would
                        result in requiring a total of <InlineMath math={"x + 1"} /> queries made per page load,
                        resulting in a limit of <InlineMath math={"\\left\\lfloor\\dfrac{x+1}{60}\\right\\rfloor"} />
                        loads per hour. Therefore, the rate-limit is easier to hit as the number of repositories
                        grows, until, with 59+ repositories, it can no longer be fully processed.
                    </p>
                </div>

                <div className={"languageButtonContainer"}>
                    {/* Map each language to a proper NavLink that changes the URL */}
                    {Object.keys(languages).map((language, i) =>
                        <NavLink
                            key={i}
                            to={location =>
                                location.pathname === `${match.url}/${language.toLowerCase()}` ?
                                    `${match.url}` : `${match.url}/${language.toLowerCase()}`}
                            activeClassName={"activeLanguage"}
                            className={"languageButton"}
                            onClick={() =>
                                setPreferred(preferred === language ? "" : language)}
                        >
                            <div className={`${classify(language)}-circle  circle`}/>
                            <p className={classify(language) + "-border"}>
                                <span className={"languageText"}>{language}</span> (<span className={"languageCount"}>{languages[language]}</span>)
                            </p>
                        </NavLink>)
                    }

                    <NavLink
                        to={`${match.url}`}
                        className={"languageButton"}
                        onClick={() => setPreferred("")}
                    ><p>All (<span className={"languageCount"}>
                        {Object.keys(languages).reduce((acc, i) => acc + languages[i], 0)}</span>)
                    </p>
                    </NavLink>
                </div>

                <div className={"projectBox"}>
                {/* Filter down by preferred language (if set) and to first X abiding by upper limit,
                 and map all these to a proper "Project" object */}
                    {results
                        .filter(x => (preferred ? x["language"] === preferred : true))
                        .filter((x, i) => i < upperLimit)
                        .map((name, i) => <Project key={i} repository_data={name} />)
                    }

                </div>

                {/* Box for Show More / Show Less buttons */}
                <div className={"showButtons"}>

                    {/* Only show "Show More" when less than max shown */}
                    {upperLimit < results.filter(x => (preferred ? x["language"] === preferred : true)).length &&
                    <button
                        onClick={() => setLimit(upperLimit + 5)}
                    >Show More</button>}


                    {/* Only show "Show Less" when more than min shown */}
                    {upperLimit > 5 &&
                    <button onClick={() => setLimit(Math.max(upperLimit - 10, 5))}
                    >Show Less</button>}

                </div>

            </div>


            {/* Switch used to implement a catch-all Redirect */}
            <Switch>

                {/* Ensure the unfiltered route is caught */}
                <Route exact path={`${match.path}`}/>

                {/* Catch each language-specific route */}
                {Object.keys(languages).map((language, i) =>
                    <Route
                        path={`${match.path}/:language`}
                        key={i}
                    />
                )}

                {/* Redirect back to the default on any invalid language */}
                <Redirect to={`${match.path}`} />
            </Switch>
        </Router>
    )
}

export default GithubProjects