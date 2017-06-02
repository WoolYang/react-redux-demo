
const initialState = {
        open: false,
};

export default (state = initialState, action) => {
    let newState
    switch (action.type) {

      case 'OPEN_MENU':
            newState = Object.assign({}, state, {
            open: action.text
          })

          return newState;

      default:
          return state;

    }
}
