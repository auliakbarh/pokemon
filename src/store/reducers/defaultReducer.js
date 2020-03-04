import * as actionTypes from '../actions/actionNames';

const initialState = {
    countOfPokemons: 0,
    listOfPokemons: [],
    detailPokemon: null,
    myPokemons: [],
    isLoading: true,
    isSuccess: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_LIST_POKEMON_FAILED:
        case actionTypes.FETCH_DETAIL_OF_POKEMON_FAILED:
            return {
                ...state,
                isLoading: false,
                isSuccess: false
            };
        case actionTypes.FETCH_LIST_POKEMON:
        case actionTypes.FETCH_DETAIL_OF_POKEMON:
            return {
                ...state,
                isLoading: true,
                isSuccess: false
            };
        case actionTypes.FETCH_LIST_POKEMON_SUCCESS:
            return {
                ...state,
                listOfPokemons: [...state.listOfPokemons, ...action.payload.results],
                countOfPokemons: action.payload.count,
                isLoading: false,
                isSuccess: true
            };
        case actionTypes.FETCH_DETAIL_OF_POKEMON_SUCCESS:
            return {
                ...state,
                detailPokemon: action.payload,
                isLoading: false,
                isSuccess: true
            };
        default:
            return state
    }
}
