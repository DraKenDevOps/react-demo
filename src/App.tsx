import { useState } from "react";
import reactLogo from "/react.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>DEMO CLOUDFLARE WORKER {new Date().getFullYear()}</h1>
            <div className="card">
                <button onClick={() => setCount(count => count + 1)}>COUNT IS {count}</button>
            </div>
        </>
    );
}

export default App;
