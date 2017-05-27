
const initialState = {
      hideState: false
};

export default (state = initialState, action) => {
	let newState

    switch (action.type) {

      case 'TOGGLE':

          newState = Object.assign({}, state, {
            toggle: action.text
          })
          return newState;

      default:

          return state;

    }
}
