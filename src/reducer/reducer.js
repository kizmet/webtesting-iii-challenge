export const initialState = {
  locked: false,
  closed: false
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_LOCKED":
      return {
        ...state,
        locked: !state.locked
      };
    case "TOGGLE_CLOSED":
      return {
        ...state,
        closed: !state.closed
      };
    default:
      return state;
  }
}
