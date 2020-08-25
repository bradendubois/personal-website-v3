import React from "react"

const Footer = ({section}) =>

    <div className={"footer " + section}>
        <p>Footer: {section}</p>
        <button
            onClick={() => {
            window.scrollTo(0, 0)
        }}
            >To Top</button>
    </div>

export default Footer