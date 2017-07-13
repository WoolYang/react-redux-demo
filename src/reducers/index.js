import {
	combineReducers
} from 'redux';
import articleReducer from './articleReducer';

const rootReducer = combineReducers({
	articleData: articleReducer
});

export default rootReducer;