import React from 'react';
import ReactDOM from 'react-dom';

interface User {
    name: string;
    id: number;
}

const user: User = {
    name: "Typescript Writer",
    id: 1
}

export default function App() {
    return (
        <div style={{ display: 'flex' }}>
            Hello {user.name}!
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));