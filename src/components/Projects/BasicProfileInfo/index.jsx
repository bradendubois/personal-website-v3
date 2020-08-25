import React, {useEffect} from "react";

const BasicProfileInfo = () => {

    const [bio, setBio] = React.useState("Loading bio...")
    const [blog, setBlog] = React.useState("Loading blog...")
    const [img, setImage] = React.useState()

    useEffect(() => {
        fetch("https://api.github.com/users/bradendubois")
            .then(response => response.json())
            .then(data => {
                setBio(data["bio"])
                setBlog(data["blog"])
                setImage(<img src={data["avatar_url"]} alt={"My Github profile icon."}/>)
            })
    }, [])

    return (
        <div>
            {img}
            <p>Profile: {blog}</p>
            <p>Bio: {bio}</p>
        </div>
    )
}

export default BasicProfileInfo