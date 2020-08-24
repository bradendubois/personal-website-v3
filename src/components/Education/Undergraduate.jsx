import React from "react"
import loadable from "@loadable/component"

import {withRouter} from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link,
    useRouteMatch,
    Redirect,
} from "react-router-dom";
import GithubProjects from "../projects/GithubProjects";
import Projects from "../../routes/Projects";

const Undergraduate = () => {

    const match = useRouteMatch()

    return (
        <div>

            <Switch>
                <Route path={`*`}>
                    <Link to={"/github"}>UNDERGRAD Github</Link>
                </Route>
            </Switch>

        </div>
    )
}

export default Undergraduate