import React from "react";
import { createRoot } from "react-dom/client";
import PlayersView from "./components/PlayersView";
import PlayersContextProvider from "./contexts/PlayersContext";

export default function App() {
    return (
        <div style={{ display: 'flex' }}>
            <PlayersContextProvider>
                <PlayersView/>
            </PlayersContextProvider>
        </div>
    );
}

const element = document.getElementById('app');
const root = createRoot(element);
root.render(<App />, );
