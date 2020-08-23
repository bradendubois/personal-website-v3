import React, { Suspense, lazy } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import Home from "./routes/home"
import About from "./routes/about"
import Topics from "./routes/topics"

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
        </div>
    </Router>

export default App
