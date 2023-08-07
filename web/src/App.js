import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import PlayerSelect from './components/PlayerSelect.js'
import StatGraph from './components/StatGraph.js'
import { binaryToStats } from './utils.js';

function App() {
    const [stats, setStats] = useState([]);
    useEffect(() => {
        async function getData() {
            const response = await fetch('stats.csv');
            const reader = response.body.getReader()
            const result = await reader.read() // raw array
            const stats = binaryToStats(result);
            setStats(stats);
        }
        getData();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <div>MLB Player Catalog</div>
                <PlayerSelect stats={stats}/>
                <StatGraph stats={stats}/>
            </header>
        </div>
    );
}

export default App;
