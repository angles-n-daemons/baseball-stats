import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Papa from 'papaparse';

function App() {
    useEffect(() => {
        async function getData() {
            const response = await fetch('stats.csv');
            const reader = response.body.getReader()
            const result = await reader.read() // raw array
            const decoder = new TextDecoder('utf-8')
            const csv = decoder.decode(result.value) // the csv text
            const results = Papa.parse(csv, { header: true }) // object with { data, errors, meta }
            const rows = results.data 
            console.log(rows);
        }
        getData();
    });

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                   Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                   className="App-link"
                   href="https://reactjs.org"
                   target="_blank"
                   rel="noopener noreferrer"
                >
                   Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
