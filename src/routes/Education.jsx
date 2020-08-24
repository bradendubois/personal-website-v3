import React from "react"
import loadable from "@loadable/component"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useRouteMatch,
    Link,
    Redirect
} from "react-router-dom";

const Programs = [
    {
        path: "undergraduate",
        component: loadable(() => import("../components/Education/Undergraduate")),
        display: "Undergraduate"
    },
    //{
      //  path: "certificate"
    //}
    ];


const Education = () => {

    let match = useRouteMatch()

    return (
            <div>
                {/* Map all the education entries to a Nav Bar */}
                {Programs.map((program, i) =>
                    <NavLink
                        key={i}
                        to={location =>
                            location.pathname === `${match.url}/${program.path}` ?
                                `${match.url}` : `${match.url}/${program.path}`
                        }
                    activeClassName={"activeEducationProgram"}
                    className={"educationProgram " + program}
                >{program.display}</NavLink>)}

                <Link to={"/github"}><h1>Github</h1></Link>

                {/* Map Education entries to Routes */}
                <Switch>

                    <Route exact path={`${match.path}`}>
                        <h3>Undergrad Summary</h3>
                    </Route>

                    {Programs.map(program =>
                        <Route component={program.component} />
                    )}

                    <Route>
                        <Redirect to={"/github"} />
                    </Route>

                    <Route path={"*"}>
                        <Redirect to={`${match.path}`} />
                    </Route>
                </Switch>
            </div>
    )
}

export default Education