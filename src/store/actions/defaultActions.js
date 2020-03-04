import * as actionTypes from './actionNames';

export const FETCH_LIST_OF_POKEMONS = offset => ({
    type: actionTypes.FETCH_LIST_POKEMON,
    offset
});

export const FETCH_DETAIL_OF_POKEMON = id => ({
    type: actionTypes.FETCH_DETAIL_OF_POKEMON,
    id
});
