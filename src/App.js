import React, { Suspense, lazy } from "react";
import loadable from "@loadable/component"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

const Home = loadable(() => import("./routes/home"))
const About = loadable(() => import("./routes/about"))
const Topics = loadable(() => import("./routes/topic"))



const App = () =>

    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
            </ul>

            <Suspense fallback={<div>Loading...</div>}>

                <Switch>

                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/topics">
                        <Topics />
                    </Route>

                    <Route path={"*"}>
                        <Home />
                    </Route>

                </Switch>

            </Suspense>

        </div>
    </Router>

export default App
