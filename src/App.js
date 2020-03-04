import React, {Component} from 'react';
import logo from './assets/icons/pokeball.png';
import './App.css';
import { connect } from 'react-redux'

import {FETCH_LIST_OF_POKEMONS} from './store/actions/defaultActions';

function Item({value, index}) {
  return (
      <a className={"list-of-Pokemons"}>
        <div className={"button-to-detail"}>
          {value.name}
        </div>
      </a>
  );
}

function MyList({items}) {
  return (
      <>
        {items.map((item, index) => <Item key={item.name} value={item} index={index+1} />)}
      </>
  );
}

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
              Showing {this.props.default.listOfPokemons.length} of {this.props.default.countOfPokemons} Pokemons
            </p>
            <MyList items={this.props.default.listOfPokemons} />
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
