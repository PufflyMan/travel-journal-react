import React from "react";
import logo from './assets/worldwide.png'

export default function Header() {
    return (
        <>
        <div id="first-header">
        <img id="img1" src={logo} alt="world" width={30} height={30} />
            <h3>my travel journal</h3>
        </div>

        </>
    )
}