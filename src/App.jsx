import { useEffect, useRef } from 'react';
import './App.css';
import pokemons from './assets/pokemons.json';

const Card = ({ name, image, text }) => {
    const ref = useRef(null);
    useEffect(() => {
        ref.current.style.setProperty('--image-url', `url(${image})`);
    }, []);
    return (
        <div className="card" ref={ref}>
            <div className="image"></div>
            <div className="info">
                <h1>{name}</h1>
                <p>{text}</p>
            </div>
        </div>
    );
};

function App() {
    return (
        <div className="page">
            <div className="layout">
                <div className="container">
                    <Card {...pokemons[0]} />
                    <Card {...pokemons[1]} />
                    <Card {...pokemons[2]} />
                </div>
                <div className="container">
                    <Card {...pokemons[3]} />
                    <Card {...pokemons[4]} />
                </div>
            </div>
        </div>
    );
}

export default App;
