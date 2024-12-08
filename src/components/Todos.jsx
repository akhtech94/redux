import { useDispatch, useSelector } from "react-redux";

export const Todos = () => {
  const dispatch = useDispatch();
  const todosList = useSelector((state) => state.todos.todosList);
  const error = useSelector((state) => state.todos.error);

  const fetchTodos = async (dispatch) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      dispatch({ type: "FETCH_TODOS_SUCCESS", payLoad: { todos: data } });
    } catch (error) {
      dispatch({
        type: "FETCH_TODOS_FAILURE",
        payLoad: { error: error.message },
      });
    }
  };

  const handleFetchTodos = () => {
    dispatch(fetchTodos);
  };

  return (
    <>
      <h1>Todos</h1>
      {error ? (
        <p>{error}</p>
      ) : todosList.length ? (
        todosList.map((todo) => <p key={todo.id}>{todo.title}</p>)
      ) : (
        <input type="button" value="Fetch Todos" onClick={handleFetchTodos} />
      )}
    </>
  );
};
