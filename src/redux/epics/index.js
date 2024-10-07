import { combineEpics } from 'redux-observable';
import { fetchPlacesEpic } from './placesEpic';  

export const rootEpic = combineEpics(
 
  fetchPlacesEpic  
);
