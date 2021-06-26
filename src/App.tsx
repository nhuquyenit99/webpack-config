import React from "react"

function App() {
    const onClick = () => {
        console.log("Something")
    }
    return (
        <div className="App">
            <h1 onClick={onClick}>
                <span className="icon-id-badge-fill" />
                Hello Worlddddddd
            </h1>
        </div>
    )
}

export default App
