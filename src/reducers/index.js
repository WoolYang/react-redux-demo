import { combineReducers } from 'redux';
import headerReducer from './headerReducer';
import menuReducer from './menuReducer';

const rootReducer = combineReducers({
    header: headerReducer,
    menu: menuReducer
});

export default rootReducer;
