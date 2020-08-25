import React from "react"
import loadable from "@loadable/component";

const BasicProfileInfo  = loadable(() => import("../components/Projects/BasicProfileInfo"))
const RepoInfo = loadable(() =>  import("../components/Projects/GithubProjects"))

const Projects = () =>

    <div>
        <BasicProfileInfo />
        <RepoInfo />
    </div>

export default Projects