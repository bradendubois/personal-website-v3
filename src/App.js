import React, { Suspense } from "react"
import { Redirect } from "react-router"
import ReactMarkdown from "react-markdown"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useRouteMatch,
    useParams
} from "react-router-dom";

import loadable from "@loadable/component"

// Use Loadable components for code-splitting
const Home = loadable(() => import("./routes/home"))
const About = loadable(() => import("./routes/about"))
const Topics = loadable(() => import("./routes/topics"))
const Blog = loadable(() => import("./routes/blog"))
const Projects = loadable(() => import("./routes/projects"))


const App = () =>

    <Router>

        <Suspense fallback={<div>Loading...</div>}>

            <div>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName={"active"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName={"active"}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/topics" activeClassName={"active"}>Topics</NavLink>
                    </li>
                    <li>
                        <NavLink to="/github" activeClassName={"active"}>Github</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/blog"}>Blog</NavLink>
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

                    <Route path={"/github"}>
                        <Suspense fallback={<h1>Querying Github...</h1>} >
                            <Projects />
                        </Suspense>
                    </Route>

                    <Route>
                        <Suspense fallback={<h1>Loading blog...</h1>}>
                            <Blog />
                        </Suspense>
                    </Route>

                    <Route path={"*"}>
                        <Redirect to={"/"}/>
                    </Route>

                </Switch>


        </div>

        </Suspense>
    </Router>

export default App
