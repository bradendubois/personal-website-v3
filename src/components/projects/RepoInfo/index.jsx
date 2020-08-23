import React, {useEffect, Suspense } from "react";

import Project from "../project";

const RepoInfo = () => {

    const [results, setResults] = React.useState([])
    const [upperLimit, increaseLimit] = React.useState(5)

    useEffect(() => {
        fetch("https://api.github.com/users/bradendubois/repos")
            .then(response => {

                switch (response.status) {

                    // All okay
                    case 200:

                        // Turn to JSON
                        response.json()

                            // Sort, newest to oldest
                            .then(repos => {
                                repos.sort((a, b) => {
                                    let a_t = a["updated_at"].substring(0, a["updated_at"].length-1)
                                    let b_t = b["updated_at"].substring(0, b["updated_at"].length-1)
                                    return Date.parse(b_t) - Date.parse(a_t)
                                }); return repos
                            })
                            .then(sorted => setResults(sorted))
                        break

                    // Rate limited - too many queries
                    case 403:
                        console.log("Rate limited - uh oh! Wait an hour.")
                        setResults(<h1>Rate limited - try again in an hour.</h1>)
                        break

                    // Default case
                    default:
                        console.log("No plan for response code:", response.status)
                        break
                }
            })
    }, [])

    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            {results
                .filter((i, x) => x < upperLimit)
                .map((name, i) => <Project key={i} repository_data={name} />)
            }
            {upperLimit < results.length &&
            <button onClick={() => increaseLimit(upperLimit + 5)}>Show More</button>}
        </Suspense>
    )
}

export default RepoInfo