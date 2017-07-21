import {
	combineReducers
} from 'redux';
import articleReducer from './articleReducer';
import tagReducer from './tagReducer';

const rootReducer = combineReducers({
	articleData: articleReducer,
	tagData: tagReducer
});

export default rootReducer;