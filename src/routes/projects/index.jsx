import React, { Suspense, useEffect } from "react"
import { Redirect } from "react-router"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useRouteMatch,
    useParams
} from "react-router-dom"

import BasicProfileInfo from "../../components/projects/BasicProfileInfo";
import RepoInfo from "../../components/projects/RepoInfo";


const Projects = () =>

    <div>
        <Suspense fallback={<h1>Loading Profile...</h1>}>
            <BasicProfileInfo />
        </Suspense>

        <Suspense fallback={<h1>Loading Repos...</h1>}>
            <RepoInfo />
        </Suspense>
    </div>

export default Projects