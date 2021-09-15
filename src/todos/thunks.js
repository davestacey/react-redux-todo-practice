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
    const bodyObj = {
      "title": title,
      "body": "'bar'",
      "userId": "1",
    }
    const body = JSON.stringify({ bodyObj });
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body,
    });
    const todoResponse = await response.json();
    const newTodo = {
      userId: 6,
      id: todoResponse.id + 700,
      title: todoResponse.bodyObj.title,
      completed: false,
      idRandom: Math.random().toString(36).substr(2, 9),
    }
    newTodo.idRandom = Math.random().toString(36).substr(2, 9)
    dispatch(createTodo(newTodo));
  } catch (e) {
    dispatch(displayAlert(e));
  }
}

export const displayAlert = title => () => {
  alert(title);
};
