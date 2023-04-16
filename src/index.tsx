import { createRoot } from "react-dom/client";
import {useState} from "react";

const App = () => {
    const [some, setSome] = useState(true)
    let handle = () => {
        setSome(some => !some)
    }
    return( 
    <div>
        <h1>hi</h1>
        {some && <h2>Hey</h2>}
        <button onClick={handle}>Show</button>
    </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App/>);