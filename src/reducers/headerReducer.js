
const initialState = {
        toggle: false,
        domain: 'wool',
        refMachineCode: '111',
        _user_name: 'wool',
        isMain: true
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
