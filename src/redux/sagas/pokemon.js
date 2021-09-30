import { call, put } from 'redux-saga/effects';

import { api } from '../../services/api';
import PokemonActions from '../ducks/pokemon';

//função geradora
export function* capture(action) {
  try {
    const { id } = action;

    const { data } = yield call(api.get, `pokemon/${id}`);

    yield put(PokemonActions.captureSuccess(data));
  } catch (err) {
    yield put(PokemonActions.captureFailure(err.response.data.error.message));
  }
}