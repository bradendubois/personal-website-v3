import React from "react"
import loadable from "@loadable/component"
import { Redirect } from "react-router"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

// Lazy importing for code splitting
const Home = loadable(() => import("./routes/Home"))
const NavBar = loadable(() => import("./components/NavBar"))
const Footer = loadable(() => import("./components/Footer"))

/*
 * We define the "view" / ordering of the page here, and this ordering allows the generation
 * of the Nav Bar, and generates the Routes for having foo.com/bar matches to update the view
 * accordingly. The loadable module allows lazy importing for code splitting. We dont' include
 * the Home or footer as a module in this array; the Home is its own component that should be
 * accessible with/without the the Nav Bar, and the Footer shouldn't be in the Nav Bar.
 */
const View = [
    {
      path: "/me",
      display: "Me",
      component: Home
    },
    {
        path: "/about",
        display: "About",
        component: loadable(() => import("./routes/About"))
    },
    {
        path: "/topics",
        display: "Topics",
        component: loadable(() => import("./routes/Topics"))
    },
    {
        path: "/github",
        display: "Github",
        component: loadable(() => import("./routes/Projects"))
    },
    {
        path: "/education",
        display: "Education",
        component: loadable(() => import("./routes/Education"))
    }
]


// TODO - Handle matching with longer paths (i.e. /foo/bar should match /foo)
/*
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
*/

const App = () =>

    <Router>

        {/* TODO - Some kind of back/forward left/right button system, possibly in the nav bar? */}
        {/*
        <Link to={(location) => back(location).path}
        ><button id={"left-button"}>Left</button></Link>

        <Link to={location => next(location).path}
        ><button id={"right-button"}>Right</button></Link>
        */}

        <div>

            {/* Nav bar  */}
            <NavBar view={View} />

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
