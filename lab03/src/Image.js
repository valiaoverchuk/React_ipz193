import React from "react";

export function Image(props) {
    const {title, url} = props;

    return (
        <>
            <h2>{title}</h2>
            <img src={url} alt={title}/>
        </>
    )
}

