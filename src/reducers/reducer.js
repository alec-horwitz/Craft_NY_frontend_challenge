function reducer(state, action) {
  switch (action.type) {

    case "ASSIGN_LISTING":
      return {...state, listing: action.payload}

    case "TOGGLE_LIST":
      return {...state, toggle: action.payload}
    default:
      return state
  }
}

export default reducer
