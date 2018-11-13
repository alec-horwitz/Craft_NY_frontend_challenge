function reducer(state, action) {
  switch (action.type) {

    case "ASSIGN_LISTING":
      return {...state, listing: action.payload}

    case "TOGGLE_LIST":
      return {...state, toggle: action.payload}

    case "TOGGLE_FAV":
      const index = state.favorited.indexOf(action.payload)
      if (index === -1) {
        return {...state, favorited: [...state.favorited, action.payload] }
      } else {
        return {...state, favorited: [...state.favorited.slice(0,index), ...state.favorited.slice(index+1)]}
      }

    default:
      return state
  }
}

export default reducer
