
const initialState = {
        status: 1,
        result:[]
};

export default (state = initialState, action) => {
    let newState
    switch (action.type) {

      case 'RECEIVE_ARTICLE_LIST':
            newState = Object.assign({},state,
            action.json
          )
          return newState;

      case 'RECEIVE_ARTICLE_DETAIL':
            newState = Object.assign({},state,
            action.json
          )
          return newState;

      default:
          return state;

    }
}
