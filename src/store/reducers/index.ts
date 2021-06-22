import { combineReducers } from 'redux';

export type RootAction = any; //TODO: change when actions are typed

export interface RootState {
  search: SearchState;
}

const rootReducer = combineReducers({
  search,
});

export default rootReducer;
