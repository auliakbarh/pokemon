import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

import {FETCH_LIST_OF_POKEMONS} from './store/actions/defaultActions';

class App extends Component {
  componentDidMount() {
    this.props.fetchListOfPokemons(this.props.default.listOfPokemons.length);
  }

  render(){
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
              Learn React {this.props.default.listOfPokemons.length}
            </a>
          </header>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  default: state.default
});

const mapDispatchToProps = dispatch => ({
  fetchListOfPokemons: (offset) => dispatch(FETCH_LIST_OF_POKEMONS(offset))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
