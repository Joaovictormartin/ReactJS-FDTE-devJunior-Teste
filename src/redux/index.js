import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducers from './ducks';
import sagas from './sagas';

const config = {
  key: 'pokemon',
  whitelist: [],
  storage,
};

const persistedRedurcer = persistReducer(config, reducers);

const sagaMonitor = process.env.NODE_ENV === "development"
? console.tron.createSagaMonitor()
: null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middlewares = [];

middlewares.push(sagaMiddleware);

const composer = process.env.NODE_ENV === "development"
  ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
  : compose(applyMiddleware(...middlewares));

const store = createStore(persistedRedurcer, composer);
const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };