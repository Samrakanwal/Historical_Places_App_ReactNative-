// store.js
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../redux/reducers/ index';  
import { rootEpic } from '../redux/epics/index';  
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware();  
const store = createStore(
  
  rootReducer, 
 
  applyMiddleware(epicMiddleware)  
);

epicMiddleware.run(rootEpic);  

export default store;
