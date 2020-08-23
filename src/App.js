import React from "react"
import loadable from "@loadable/component"
import { Redirect } from "react-router"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
} from "react-router-dom";

import Button from "react-bulma-components/"

// Use Loadable components for code-splitting
const Home = loadable(() => import("./routes/home"))
const About = loadable(() => import("./routes/about"))
const Topics = loadable(() => import("./routes/topics"))
const Projects = loadable(() => import("./routes/projects"))

const View = [
    {
      path: "/me",
      display: "Me",
      component: Home
    },
    {
        path: "/about",
        display: "About",
        component: About
    },
    {
        path: "/topics",
        display: "Topics",
        component: Topics
    },
    {
        path: "/github",
        display: "Github",
        component: Projects
    }
]

const back = (location) => {
    if (location.pathname === "/") return View[View.length-1]

    for (let i = 0; i < View.length; i++) {
        if (location.pathname === View[i].path) {
            return View[(i + View.length - 1) % View.length]
        }
    }
}

const next = (location) => {
    if (location.pathname === "/") return View[0]

    for (let i = 0; i < View.length; i++) {
        if (location.pathname === View[i].path) {
            return View[(i + 1) % View.length]
        }
    }
}

const App = () =>

    <Router>

        <Link
            to={(location) => back(location).path}
        ><button>Left</button></Link>

        <Link
            to={location => next(location).path}
        ><button>Right</button></Link>

        <div>
            <ul>
                {View.map((page, i) =>
                    <li key={i}>
                        <NavLink
                            exact to={page.path}
                            activeClassName={"active"}
                        >{page.display}</NavLink>
                    </li>
                )}
            </ul>

            <button>Back</button>
            <button>Forward</button>

            {/* Switch to determine content */}
            <Switch>

                {/* Home page when no path is specified */}
                <Route exact path="/">
                    <Home />
                </Route>

                {View.map((page, i) =>
                    <Route
                        key={i}
                        exact path={page.path}
                        component={page.component}
                    />)
                }

                {/* Fallback - Redirect/Catch any bad urls to avoid a 404 */}
                <Route path={"*"}>
                    <Redirect to={"/"}/>
                </Route>

            </Switch>
        </div>

    </Router>

export default App
