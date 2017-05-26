import { fromJS } from 'immutable';

const initialState = {
      hideState: false
};

export default (state = initialState, action) => {

    switch (action.type) {

      case 'TOGGLE':

          return fromJS(state).set('toggle', !state.toggle).toJS();

      default:

          return state;

    }
}
