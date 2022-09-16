import React from "react";
import { createRoot } from "react-dom/client";
import UsersView from "./components/UsersView";

export default function App() {
    return (
        <div style={{ display: 'flex' }}>
            <UsersView/>
        </div>
    );
}

const element = document.getElementById('app');
const root = createRoot(element);
root.render(<App />, );
