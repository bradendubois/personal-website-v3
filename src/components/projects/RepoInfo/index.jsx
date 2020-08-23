import React, {useEffect, Suspense } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link, useRouteMatch, Redirect
} from "react-router-dom";

import Project from "../project";

import "./index.scss"

const RepoInfo = () => {

    let match = useRouteMatch()

    const [results, setResults] = React.useState([])
    const [upperLimit, increaseLimit] = React.useState(5)
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

            {Object.keys(languages).map((language, i) =>
                <NavLink
                    key={i}
                    to={location =>
                        location.pathname === `${match.url}/${language.toLowerCase()}` ?
                            `${match.url}` : `${match.url}/${language.toLowerCase()}`
                    }

                    activeClassName={"activeLanguage"}
                >
                    <button
                        onClick={() =>
                            setPreferred(preferred === language ? "" : language)}
                    >{language}: {languages[language]}</button>
                </NavLink>)
            }

            {results
                .filter(x => (preferred ? x["language"] === preferred : true))
                .filter((x, i) => i < upperLimit)
                .map((name, i) => <Project key={i} repository_data={name} />)
            }
            {upperLimit < results.length &&
            <button onClick={() => increaseLimit(upperLimit + 5)}>Show More</button>}

            <Switch>
                <Route exact path={`${match.path}`}/>

                {Object.keys(languages).map((language, i) =>
                    <Route
                        path={`${match.path}/:language`}
                        key={i}
                    />
                )}

                <Redirect to={`${match.path}`} />
            </Switch>
        </Router>
    )
}

export default RepoInfo