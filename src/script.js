import React, { Children } from "react";            //call the react libaray because we will use the react app
import ReactDOM from "react-dom/client";             // call the react-dom because we want to see the react componant on screen
import "./index.css"

function Minthu() {
    return (
        <div>
            <h1>Min Thu Khaing</h1>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Minthu/>);