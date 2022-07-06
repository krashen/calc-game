// deps
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

// files
import reducers from '../reducers/index';
import getFactMiddleware from '../middlewares/getFactMiddleware';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['rank']
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk, getFactMiddleware]
})

const persistor = persistStore(store);

export { store, persistor } 
