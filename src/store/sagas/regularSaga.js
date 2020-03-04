import {takeLatest, put} from 'redux-saga/effects';
import * as actionType from '../actions/actionNames';

import * as api from '../../utils/endPoints';

function* fetchingListOfPokemons({offset}) {
  const response = yield fetch(api.GET_LIST_OF_POKEMONS(offset)).then(response => {
    return response.json()
  }).then(data => {
    return data
  }).catch(e => {
    console.log(e);
    return null
  });

  try{
    if(response){
      yield put({
        type: actionType.FETCH_LIST_POKEMON_SUCCESS,
        payload: response
      })
    }
  }catch (e) {
    console.log(e)
  }
}

export default [takeLatest(actionType.FETCH_LIST_POKEMON, fetchingListOfPokemons)];
