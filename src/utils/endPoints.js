export const API_URL = 'https://pokeapi.co/api/v2/';

export const GET_LIST_OF_POKEMONS = (offset) => API_URL + `pokemon?offset=${offset}&limit=20`;
export const GET_DETAIL_OF_POKEMON = (id) => API_URL + `pokemon/${id}`;
