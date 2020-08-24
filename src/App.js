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

// Use Loadable components for code-splitting
const Home = loadable(() => import("./routes/Home"))
const About = loadable(() => import("./routes/About"))
const Topics = loadable(() => import("./routes/Topics"))
const Projects = loadable(() => import("./routes/Projects"))

const Footer = loadable(() => import("./components/Footer"))

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
    },
    {
        path: "/education",
        display: "Education",
        component: loadable(() => import("./routes/Education"))
    }
]


// TODO - Handle matching with longer paths (i.e. /foo/bar should match /foo)
const back = (location) => {
    if (location.pathname === "/") return View[View.length-1]

    for (let i = 0; i < View.length; i++) {
        if (location.pathname === View[i].path || location.find(View[i].path) > -1) {
            return View[(i + View.length - 1) % View.length]
        }
    }
}

const next = (location) => {
    if (location.pathname === "/") return View[0]

    for (let i = 0; i < View.length; i++) {
        if (location.pathname === View[i].path || location.find(View[i].path) > -1) {
            return View[(i + 1) % View.length]
        }
    }
}

const App = () =>

    <Router>

        {/*
        <Link to={(location) => back(location).path}
        ><button id={"left-button"}>Left</button></Link>

        <Link to={location => next(location).path}
        ><button id={"right-button"}>Right</button></Link>
        */}

        <div>

            {/* Nav bar  */}
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

            {/* Switch to determine content */}
            <Switch>

                {/* Home page when no path is specified */}
                <Route exact path="/">
                    <Home />
                </Route>

                {View.map((page, i) =>
                    <Route
                        key={i}
                        path={page.path}
                        component={page.component}
                    />)
                }

                {/* Fallback - Redirect/Catch any bad urls to avoid a 404 */}
                <Route path={"*"}>
                    <Redirect to={"/"}/>
                </Route>
            </Switch>

            {/* Footer Switch */}
            <Switch>
                {View.map((page, i) =>
                    <Route
                        key={i}
                        path={page.path}
                    >
                        <Footer section={page.display} />
                    </Route>)
                }
            </Switch>
        </div>

    </Router>

export default App
