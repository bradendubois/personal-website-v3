import React from "react"
import loadable from "@loadable/component"
import {
    Switch,
    Route,
    NavLink,
    useRouteMatch,
    Redirect
} from "react-router-dom";

import EducationSummary from "../components/Education/EducationSummary";

import "../components/Education/index.scss"

const Programs = [
    {
        path: "undergraduate",
        component: loadable(() => import("../components/Education/Undergraduate")),
        display: "Undergraduate"
    },
    {
        path: "certificate",
        display: "Certificate - E.J.L",
        component: loadable(() => import("../components/Education/Certificate"))
    }
];


const Education = () => {

    let match = useRouteMatch()

    return (
        <div className={"educationContainer"}>

            <div className={"educationNav"}>

                {/* Map all the education entries to a Nav Bar */}
                {Programs.map((program, i) =>
                    <NavLink
                        key={i}
                        to={location =>
                            location.pathname === `${match.url}/${program.path}` ?
                                `${match.url}` : `${match.url}/${program.path}`
                        }
                        activeClassName={"activeEducationProgram"}
                        className={`educationProgram ${program.path}`}
                    >{program.display}</NavLink>)}

            </div>

            {/* Map Education entries to Routes */}
            <Switch>

                {/* No specific Education program selected */}
                <Route exact path={`${match.path}`}>
                    <EducationSummary />
                </Route>

                {/* Map each Program to a Route showing its component */}
                {Programs.map((program, i) =>
                    <Route
                        key={i}
                        path={`${match.path}/${program.path}`}
                        component={program.component}
                    />
                )}

                {/* Redirect on all other Routes to the summary */}
                <Route path={"*"}>
                    <Redirect to={`${match.path}`} />
                </Route>
            </Switch>
        </div>
    )
}

export default Education