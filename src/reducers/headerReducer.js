
const initialState = {
        toggle: false,
        domain: 'wool',
        refMachineCode: '111',
        _user_name: 'wool',
        batchPrintState: false,
        isMain: true,//判断是否为主账号
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
