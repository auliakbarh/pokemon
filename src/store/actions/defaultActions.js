import * as actionTypes from './actionNames';

export const APPEND_LIST_OF_POKEMONS = payload => ({
    type: actionTypes.FETCH_LIST_POKEMON_SUCCESS,
    payload
});

export const FETCH_LIST_OF_POKEMONS = offset => ({
    type: actionTypes.FETCH_LIST_POKEMON,
    offset
});
