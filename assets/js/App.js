import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div>Hello React!</div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}