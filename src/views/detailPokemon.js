import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import { withRouter } from "react-router";

import colorTypes from '../const/colorTypes';
import '../styles/buttonCatchCSS.css';

import {FETCH_DETAIL_OF_POKEMON} from '../store/actions/defaultActions';
import Loading from "../components/loading";


class DetailPokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chances: 1
        };
    }


    componentDidMount() {
        const {match} = this.props;
        const {id} = match.params;
        this.props.fetchDetailPokemon(id);
    }

    catchPokemon = (name) => {
        // %50 probability of get "true"
        const result = Math.random() >= 0.5;
        const {chances} = this.state;

        if(chances > 0){
            if(!result){
                alert(`${name[0].toUpperCase()}${name.slice(1,name.length)} breaks out.`);
                this.setState({
                    chances: chances - 1
                })
            }else{
                alert('Gotha!');
            }
        }else if(chances === 0){
            alert(`${name[0].toUpperCase()}${name.slice(1,name.length)} fled away.`);
            this.setState({
                chances: chances - 1
            })
            this.props.history.push("/");
        }else{
            console.log('nothing todo');
        }
    };

    render(){
        const {detailPokemon, isSuccess} = this.props.default;
        const windowWidth = window.innerWidth;

        if(isSuccess && detailPokemon){
            const {name, height, weight, types, sprites, order, moves} = detailPokemon;
            types.sort(function(a, b){
                let keyA = a.slot;
                let keyB = b.slot;
                // Compare
                if(keyA < keyB) return -1;
                if(keyA > keyB) return 1;
                return 0;
            });
            return (
                <div className="App">
                    <header className="App-header">
                        <img src={sprites.front_default} className="pokemon-image" alt={name} style={{width:"250px", height:"250px"}} />
                        <p className={"pokemon-name"}>
                            #{order} {name}
                        </p>
                        <p>
                            {
                                types.map((item, index) => <span key={index} style={{backgroundColor: colorTypes[item.type.name], padding: 5, margin: 2.5, fontWeight: 'bold'}} >{item.type.name}</span>)
                            }
                        </p>
                        <p style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            width: windowWidth,
                            margin: 0,
                            marginTop: -5,
                            fontWeight: 'bold'
                        }}>
                            <span style={{padding: 2}}>Height: {height}</span>
                            <span style={{padding: 2}}>Weight: {weight}</span>
                        </p>
                        <div
                            style={{
                                width: windowWidth * 0.8,
                                marginTop: 16
                            }}
                        >
                            <span style={{fontWeight: 'bold'}}>Moves: </span>
                            <div>
                                {
                                    moves.map((item, index) => <span key={index}>{item.move.name} {index < moves.length-1 ? `, ` : null}</span>)
                                }
                            </div>
                        </div>

                        {this.state.chances >= 0 ? <div className={"button"} onClick={() => this.catchPokemon(name)}>Catch!</div> : null}

                        <div style={{marginBottom: 24}} />
                    </header>
                </div>
            );
        }
        else {
            return <Loading />
        }

    }
}

const mapStateToProps = (state) => ({
    default: state.default
});

const mapDispatchToProps = dispatch => ({
    fetchDetailPokemon: id => dispatch(FETCH_DETAIL_OF_POKEMON(id))
});


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailPokemon));
