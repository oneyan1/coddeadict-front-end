import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
  key: 'git-data',
  storage,
  whitelist: ['search'],
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);
