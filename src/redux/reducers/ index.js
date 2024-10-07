import { combineReducers } from 'redux';
import { placesReducer } from './placesReducer'; 

export const rootReducer = combineReducers({

  places: placesReducer  
  
});
