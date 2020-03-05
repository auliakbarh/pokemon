import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router";

import huntIcon from "../assets/icons/hunt.png";

import ScrollButton from "../components/scrollButton";
import Hunt from "../components/floatingNavButton";
import colorTypes from "../const/colorTypes";

import {RELEASE_POKEMON_BY_ID} from '../store/actions/defaultActions';


function Item({value, width, onClick}) {
    const listOfPokemons = {
        display: 'block',
        border: '0 solid whitesmoke',
        padding: '2px',
        textAlign: 'center',
        textTransform: 'capitalize',
        cursor: 'pointer',
        width: width * 0.5
    };
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <div style={listOfPokemons} onClick={onClick ? onClick : console.log('list is clicked')}>
            <div style={{textDecoration: 'none'}}>
                <div className={"button-to-detail"}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}>
                        <img src={value.sprites.front_default}/>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start'
                        }}>
                            <span>{value.name} {value.nickname ? ` (${value.nickname})` : null}</span>
                            <div style={{
                                marginTop: 2
                            }}>
                                {
                                    value.types.map((item, index) => <span key={index} style={{
                                        backgroundColor: colorTypes[item.type.name],
                                        padding: 5,
                                        margin: 2.5,
                                        fontWeight: 'bold',
                                        fontSize: 9
                                    }}>{item.type.name}</span>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function MyList({items, width, height, onClick}) {
    return (
        <>
            {items.map((item, index) => <Item key={item.id} value={item} index={index + 1} width={width}
                                              height={height}
                                              onClick={() => onClick ? onClick(item.id, item.name, item.nickname) : console.log('list is clicked')}/>)}
        </>
    );
}

class MyPokemons extends Component {

    releasePokemon = (id, name, nickname) => {
        // eslint-disable-next-line no-restricted-globals
        let answer = nickname ? confirm(`Are you sure to release ${name[0].toUpperCase()}${name.slice(1, name.length)} (${nickname[0].toUpperCase()}${nickname.slice(1, name.length)})?`) : confirm(`Are you sure to release ${name[0].toUpperCase()}${name.slice(1, name.length)}?`);
        if (answer) this.props.releasePokemon(id)
    };

    render() {
        const {myPokemons} = this.props.default;
        const width = window.innerWidth;
        const height = window.innerHeight;
        console.log(myPokemons)
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        {myPokemons.length <= 1 ? `Total Pokemon: ${myPokemons.length}` : `Total Pokemons: ${myPokemons.length}`}
                    </p>
                    <MyList items={myPokemons} width={width} height={height} onClick={this.releasePokemon}/>
                    <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
                    <Hunt image={huntIcon} onClick={() => this.props.history.push("/")}/>
                </header>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    default: state.default
});

const mapDispatchToProps = dispatch => ({
    releasePokemon: id => dispatch(RELEASE_POKEMON_BY_ID(id))
});


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(MyPokemons));
