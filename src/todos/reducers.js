import { CREATE_TODO, REMOVE_TODO } from "./actions";

export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      console.log("CREATE_TODO ", text);
      const newTodo = {
        text,
        isCompleted: false
      };
      console.log("newTodo ", newTodo);
      const finalState = state.concat(newTodo);
      console.log("finalState ", finalState);
      return finalState;
    }

    case REMOVE_TODO:
      const { text } = payload;
      return state.filter((todo) => todo.text !== text);

    default:
      return state;
  }
};
