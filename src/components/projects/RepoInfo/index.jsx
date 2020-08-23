import React, {useEffect, Suspense } from "react";

import Project from "../project";

const RepoInfo = () => {

    const [results, setResults] = React.useState(<h1>Loading repo...</h1>)

    useEffect(() => {
        fetch("https://api.github.com/users/bradendubois/repos")
            .then(response => {

                switch (response.status) {
                    case 200:

                        let repos = response.json()
                        repos.sort((a, b) => Date.parse(a["updated_at"]) < Date.parse(b["updated_at"]))
                            .then(sorted => {
                                setResults(sorted.map(name => <Project key={name} repository_data={name} />))
                            })
                        break

                    case 403:
                        console.log("Rate limited - uh oh! Wait an hour.")
                        setResults(<h1>Rate limited - try again in an hour.</h1>)
                        break

                }
            })
    }, [])

    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            {results}
        </Suspense>
    )
}

export default RepoInfo