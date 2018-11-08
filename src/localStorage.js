const defaultState = {
  listing: [],
  favorited: [],
  toggle: true,
}


export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return defaultState;
    }
    return {...defaultState, ...JSON.parse(serializedState)}
  } catch (e) {
    return undefined
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState)
  } catch (e) {
    console.log(e);
  }
}
