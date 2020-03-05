import React, {Component} from 'react';
import '../styles/myPokedexCSS.css';
import pokedex from "../assets/icons/pokedex.png";

export default class MyPokedex extends Component {
    render () {
        return <img src={pokedex} alt="my-pokedex" title='My Pokedex' className='pokedex'
                       onClick={ () => { console.log('clicked'); }} />
    }
}
