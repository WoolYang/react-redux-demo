import { combineReducers } from 'redux';
import headerReducer from './headerReducer';
import articleReducer from './articleReducer';

const rootReducer = combineReducers({
    headerData: headerReducer,
    articleData:articleReducer
});

export default rootReducer;
