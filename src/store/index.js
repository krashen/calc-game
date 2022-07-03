import reducers from '../reducers/index';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['rank'],
	blacklist: [
		'level',
		'sublevel',
		'currentEqual',
		'timer',
		'gameinInitialized',
		'sumNumbers',
	]
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk]
})

const persistor = persistStore(store);

export { store, persistor } 
