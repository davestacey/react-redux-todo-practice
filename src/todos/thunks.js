import { createTodo, loadTodosInProgress, loadTodosSuccess, loadTodosFailure } from './actions';

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();

    const newTodos = todos.map(todo => {
      if(todo) {
        return { ...todo, idRandom: Math.random().toString(36).substr(2, 9) };
      }
    });

    dispatch(loadTodosSuccess(newTodos));
  } catch (e) {
    console.error(e);
    dispatch(loadTodosFailure());
    dispatch(displayAlert(e));
  }
}

export const addTodoRequest = title => async dispatch => {
  try {
    const body = JSON.stringify({ title });
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body,
    });
    const todo = await response.json();

    todo.map(todo => {
      return { ...todo, idRandom: Math.random().toString(36).substr(2, 9) };
    });

    dispatch(createTodo(todo));
  } catch (e) {
    dispatch(displayAlert(e));
  }
}

export const displayAlert = title => () => {
  alert(title);
};
