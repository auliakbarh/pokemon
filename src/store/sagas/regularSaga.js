import {takeLatest, put} from 'redux-saga/effects';
import * as actionType from '../actions/actionNames';

import * as api from '../../utils/endPoints';

function* fetchingListOfPokemons({offset}) {
  put({type: actionType.FETCH_LIST_POKEMON});
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
    }else{
      yield put({
        type: actionType.FETCH_LIST_POKEMON_FAILED
      });
    }
  }catch (e) {
    console.log(e)
  }
}

function* fetchingDetailOfPokemon({id}) {
  put({type: actionType.FETCH_DETAIL_OF_POKEMON});
  const response = yield fetch(api.GET_DETAIL_OF_POKEMON(id)).then(response => {
    return response.json()
  }).then(data => {
    console.log(data)
    return data
  }).catch(e => {
    console.log(e);
    return null
  });

  try{
    if(response){
      let {name, height, weight, types, sprites, order, moves} = response;
      height = (height * 0.1).toFixed(2) + ' m';
      weight = (weight * 0.45359237).toFixed(2) + ' kg';

      yield put({
        type: actionType.FETCH_DETAIL_OF_POKEMON_SUCCESS,
        payload: {name, height, weight, types, sprites, order, moves}
      })
    }else{
      yield put({
        type: actionType.FETCH_DETAIL_OF_POKEMON_FAILED
      });
    }
  }catch (e) {
    console.log(e)
  }
}

export default [
    takeLatest(actionType.FETCH_LIST_POKEMON, fetchingListOfPokemons),
    takeLatest(actionType.FETCH_DETAIL_OF_POKEMON, fetchingDetailOfPokemon)
];
