import React from "react"

import "./index.scss"

/*
import clock_icon from "../../../assets/clock.png"
import star_icon from "../../../assets/star.png"

const ShortHand = (language) => {
    switch (language) {
        case "Python":
            return "Py"
        case "JavaScript":
            return "JS"
        case "TypeScript":
            return "TS"
        case "Shell":
            return "Sh"
        default:
            return language
    }
}
*/

const Project = ({ repository_data }) => {

    const name = repository_data["name"]
    const description = repository_data["description"] || "No description"
    // const last_updated = repository_data["updated_at"]
    // const created = repository_data["created_at"]
    // const language = repository_data["language"] || ""
    // const license = repository_data["license"] ? repository_data["license"]["spdx_id"] : "No license."
    // const stars = repository_data["stargazers_count"]

    // const updated = Math.round((new Date() - new Date(last_updated)) / (1000 * 3600 * 24));

    // <td key={"created"}>{created}</td>
    // <td key={"license"}>{license}</td>

    return (
        <div className={"github_project"}>
            <a
                href={repository_data["html_url"]}
                rel={"noopener noreferrer"}
                target={"_blank"}
            >
                <p className={"name"} key={"name"} title={name}>{name}</p>
                <p className={"desc"} key={"desc"} title={description}>{description}</p>

                {/*

                <span className={"extra"}>

                    <p className={"language " + language} key={"language"}>{ShortHand(language)}</p>

                    <img
                        className={"clock_icon"}
                        src={clock_icon}
                        alt={"Clock icon"}
                        title={name + " was updated " + updated + " days ago."}
                    />
                    <p className={"updated"} key={"updated"}>{updated}</p>

                    <span className={"stars"}>

                        {stars ? <>
                        <img
                            className={"star_icon"}
                            src={star_icon}
                            alt={"Star icon"}
                            title={name + " has " + stars + " stars."}
                        />
                        <p>{stars}</p></> : ""}
                    </span>
                </span>
                    */}

            </a>
        </div>
    )
}

export default Project