import React from "react"

function App() {
    const onClick = () => {
        console.log("Something")
    }
    return (
        <div className="App">
            <h1 onClick={onClick}>Hello Worlddddddd</h1>
        </div>
    )
}

export default App
