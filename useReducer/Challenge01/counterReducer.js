const initialState = {
  count: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "increaseByAmount":
      return {
        ...state,
        count: state.count + action.payload,
      };
    case "decreaseByAmount":
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};
export { reducer, initialState };
