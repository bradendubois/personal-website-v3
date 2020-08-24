import React from "react"
import loadable from "@loadable/component";

const BasicProfileInfo  = loadable(() => import("../components/projects/BasicProfileInfo"))
const RepoInfo = loadable(() =>  import("../components/projects/GithubProjects"))

const Projects = () =>

    <div>
        <BasicProfileInfo />
        <RepoInfo />
    </div>

export default Projects