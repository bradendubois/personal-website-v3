import React, {useEffect} from "react";

const BasicProfileInfo = () => {

    const [bio, setBio] = React.useState("Loading bio...")
    const [blog, setBlog] = React.useState("Loading blog...")

    useEffect(() => {
        fetch("https://api.github.com/users/bradendubois")
            .then(response => response.json())
            .then(data => {
                setBio(data["bio"])
                setBlog(data["blog"])
            })
    }, [])

    return (
        <div>
            <p>Profile: {blog}</p>
            <p>Bio: {bio}</p>
        </div>
    )
}

export default BasicProfileInfo