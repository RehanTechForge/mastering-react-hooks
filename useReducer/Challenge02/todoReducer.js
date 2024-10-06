const initialState = {
  todos: [],
  filter: "all", //incomplete ,complete
};
const reducer = (state, action) => {
  switch (action.type) {
    case "add_todo":
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload, completed: false },
        ],
      };
    case "toggle_todo":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case "delete_todo":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case "set_filter":
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};
export { reducer, initialState };
