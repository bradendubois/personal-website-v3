import React, { Suspense, useEffect } from "react"
import ReactMarkdown from "react-markdown";

import {Link, Route, Switch, useParams, useRouteMatch} from "react-router-dom";

const importAll = (r) => r.keys().map(r);

const MD = () => {

    let f = useParams()

    return (
        <ReactMarkdown source={f} />
    )
}

const Blog = () => {

    let {path, url} = useRouteMatch();

    const [posts, setPosts] = React.useState([])

    useEffect(() => {

        const markdownFiles = importAll(require.context('../../data', false, /\.md$/))
            .sort()
            .reverse();

        Promise.all(markdownFiles
            .map(f => { fetch(f).then(r => r.text()) }))
            .then(loaded => setPosts(loaded))

    }, [])

    return (
        <Suspense fallback={<h1>Loading blog...</h1>}>
            <div>

                <h2>Posts</h2>

                <ul>
                    {posts.map((post, i) =>
                        <li>
                            <Link to={`${url}/${post}`}>{i}</Link>
                        </li>)
                    }
                </ul>

                {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
                <Switch>
                    {/*
                    <Route path={`${match.path}/:topicId`}>
                        <Topic />
                    </Route>
                    */}

                    <Route exact path={path}>
                        <h3>Please select a topic.</h3>
                    </Route>

                    <Route path={`${path}/:f`}>
                        <MD />
                    </Route>

                    <Route path={"*"}>
                        <h4>No post selected.</h4>
                    </Route>
                </Switch>
            </div>
        </Suspense>
    )
}

export default Blog
