import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import promiseMiddleware from 'redux-promise-middleware';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = applyMiddleware(thunk)

const store = createStore(persistedReducer, middleware);

const persistor = persistStore(store);

export { store, persistor };