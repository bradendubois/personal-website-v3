import React, { Suspense, useEffect } from "react"
import ReactMarkdown from "react-markdown";

const t = require("../../Test.md")

const Blog = () => {

    const [b, setB] = React.useState()

    useEffect(() => {

        fetch(t)
            .then(r => r.text())
            .then(r => setB(<ReactMarkdown source={r} />))

    }, [])

    return (
        <div>
            {b}
        </div>
    )
}

export default Blog