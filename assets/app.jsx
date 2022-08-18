import React from 'react';
import ReactDOM from 'react-dom';

export default function App() {
    return (
        <div style={{ display: 'flex' }}>
            Hello React!
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));