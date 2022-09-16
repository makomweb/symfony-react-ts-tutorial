import React from "react";
import { createRoot } from "react-dom/client";
import UsersView from "./components/UsersView";
import UsersContextProvider from "./contexts/UsersContext";

export default function App() {
    return (
        <div style={{ display: 'flex' }}>
            <UsersContextProvider>
                <UsersView/>
            </UsersContextProvider>
        </div>
    );
}

const element = document.getElementById('app');
const root = createRoot(element);
root.render(<App />, );
