import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";

class DetailPokemon extends Component {

    render(){
        const {listOfPokemons, countOfPokemons} = this.props.default;

        return (
            <div>
                <Link to={'/catched'}>Hello</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    default: state.default
});

const mapDispatchToProps = dispatch => ({

});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailPokemon);
