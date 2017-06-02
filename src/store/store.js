import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';    //redux-thunk中间件，改造store.dispatch，可以接受函数作为参数。
import rootReducer from '../reducers';

export default function configureStore() {
  const store = createStore(
  	rootReducer, 
  	applyMiddleware(thunk)
  );

  return store;
}
