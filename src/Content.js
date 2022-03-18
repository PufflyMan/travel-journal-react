import React from "react";

export default function Content(props) {
    return (
        <>
            <div>
                <img src={props.item.imageUrl} />
            </div>
        </>
    )
}