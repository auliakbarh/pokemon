import React, {Component} from 'react';
import '../styles/floatinNavButtonCSS.css';
import pokedex from "../assets/icons/pokedex.png";

export default class FloatingNavButton extends Component {
    render () {
        return <img src={this.props.image ? this.props.image : pokedex} alt="my-pokedex" title='My Pokedex' className='pokedex'
                       onClick={this.props.onClick ? this.props.onClick : () => console.log('My pokedex clicked')
                       } />
    }
}
