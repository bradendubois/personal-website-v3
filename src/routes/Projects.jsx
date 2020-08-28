import React from "react"
import loadable from "@loadable/component";
import {
    Switch,
    Route,
    NavLink,
    useRouteMatch
} from "react-router-dom";

import "../components/Projects/index.scss"

const BasicProfileInfo  = loadable(() => import("../components/Projects/BasicProfileInfo"))

const Sources = [
    {
        path: "github",
        display: "Github",
        component: loadable(() =>  import("../components/Projects/GithubProjects"))
    }
]

const Projects = () => {

    const match = useRouteMatch()

    return (
        <div>

            <div className={"projectsNav"}>
                {/* Navigation between Github / Work */}
                {Sources.map((source, i) =>
                    <NavLink
                        key={i}
                        to={location =>
                            location.pathname === `${match.url}/${source.path}` ?
                                `${match.url}` : `${match.url}/${source.path}`
                        }
                        activeClassName={"active"}
                        className={`${source.path}`}
                    >{source.display}</NavLink>
                )}
            </div>

            <Switch>

                <Route exact path={`${match.url}`}>
                    <h1>Summary TODO</h1>
                </Route>

                {Sources.map((source, i) =>
                    <Route
                        key={i}
                        path={`${match.url}/${source.path}`}
                        component={source.component}
                    />)
                }

            </Switch>
        </div>
    )
}

export default Projects