import { useState } from "react";

function State() {
    const [display, setdisplay] = useState(true);
    return (
        <>
            <img id="myIMG" src="https://images.unsplash.com/photo-1715943677234-d7aa6fa969aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="300px" alt="lantern" />
            <br/>
            <button onClick={() => {
                const x = document.getElementById('myIMG');
                setdisplay(prevDisplay => !prevDisplay);
                if (!display)
                    x.style.display = "block";
                else
                    x.style.display = "none"
            }}
            >Click Me</button>
            <p>Now is {display ? "true" : "false"}</p>
        </>
    )
}

export default State;