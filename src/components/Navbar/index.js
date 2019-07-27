import React from "react";
import "./style.css"




function Navbar(props) {
    return (
        <div id="backgroundColor">
            <ul className="nav justify-content-center">
                <li className="nav-item mr-5">
                    <p>Clicky Game</p>
                </li>
                <li className="nav-item mr-4">
                    <p>Counter: {props.counter}</p>
                </li>
                <li className="nav-item ">
                    <p>High Score: {props.counter}</p>
                </li>
                <li className="nav-item">
                </li>
            </ul>
        </div>
    )
}
export default Navbar; 