import React from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Poster from './components/Poster';
import Team from './components/Team';
import Prototype from './components/Prototype';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <Welcome />
                <Poster />
                <Team />
                <Prototype />
            </main>
        </div>
    );
};

export default App;