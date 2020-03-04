import * as actionTypes from '../actions/actionNames';

const initialState = {
    countOfPokemons: 0,
    listOfPokemons: [],
    detailPokemon: {},
    myPokemons: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_LIST_POKEMON_SUCCESS:
            return {
                ...state,
                listOfPokemons: [...state.listOfPokemons, ...action.payload.results],
                countOfPokemons: action.payload.count
            };
        default:
            return state
    }
}
