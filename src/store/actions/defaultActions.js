import * as actionTypes from './actionNames';
import detailPokemon from "../../views/detailPokemon";

export const FETCH_LIST_OF_POKEMONS = offset => ({
    type: actionTypes.FETCH_LIST_POKEMON,
    offset
});

export const FETCH_DETAIL_OF_POKEMON = id => ({
    type: actionTypes.FETCH_DETAIL_OF_POKEMON,
    id
});

export const SUCCESS_CACTH_POKEMON = (detailPokemon) => ({
    type: actionTypes.CATCH_POKEMON_SUCCESS,
    payload: detailPokemon
});

export const RELEASE_POKEMON_BY_ID = (id) => ({
    type: actionTypes.RELEASE_POKEM0N_BY_ID,
    id
});
