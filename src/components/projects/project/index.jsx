import React, { useEffect } from "react"

const Project = ({ repository_data }) => {

    const name = repository_data["name"]
    const description = repository_data["description"] || "No description"
    const updated = repository_data["updated_at"]
    const created = repository_data["created_at"]
    const language = repository_data["language"] || "No language detected."
    const license = repository_data["license"] && repository_data["license"]["spdx_id"] || "No license."
    const stars = repository_data["stargazers_count"]

    return (
        <div className={"github_project"}>
            <ul>
                <li key={"name"}>{name}</li>
                <li key={"desc"}>{description}</li>
                <li key={"updated"}>{updated}</li>
                <li key={"created"}>{created}</li>
                <li key={"language"}>{language}</li>
                <li key={"license"}>{license}</li>
                <li key={"stars"}>{stars}</li>
            </ul>
        </div>
    )
}

export default Project