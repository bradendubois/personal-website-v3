import React from "react"
import loadable from "@loadable/component";

const Loader = <p>Loading...</p>

const BasicProfileInfo  = loadable(() =>
    import("../components/projects/BasicProfileInfo"), {
        fallback: Loader
})

const RepoInfo = loadable(() =>
    import("../components/projects/RepoInfo"), {
        fallback: Loader
    }
)

const Projects = () =>

    <div>
        <BasicProfileInfo />
        <RepoInfo />
    </div>

export default Projects