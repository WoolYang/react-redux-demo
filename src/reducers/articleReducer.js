
export default (state = [], action) => {
    let newState

    switch (action.type) {

      case 'RECEIVE_ARTICLE_LIST':
            newState = Object.assign({}, state, {
            data: action.json
          })

          console.log(newState)
          return newState;

      default:

          return state;

    }
}
