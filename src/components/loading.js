import React from 'react';
import logo from "../assets/icons/pokeball.png";


export default function Loading(){
        return (
            <div className="App">
                <header className="App-header">
                    <div className="pokeball"><img src={logo} className="App-logo loading" alt="logo" /></div>
                    <p>Loading ..</p>
                </header>
            </div>
        )
}
