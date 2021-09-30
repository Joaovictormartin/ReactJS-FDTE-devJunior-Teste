import { all, takeLatest } from 'redux-saga/effects';

import { PokemonTypes } from '../ducks/pokemon';
import { capture } from './pokemon';

export default function* rootSaga() {
  yield all([ takeLatest(PokemonTypes.CAPTURE_REQUEST, capture) ]);
}
