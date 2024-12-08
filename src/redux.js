import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const initialState_user = {
  currentUser: null,
};

const userReducer = (currentState = initialState_user, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        currentUser: {
          userId: action.payLoad.userId,
          userName: action.payLoad.userName,
        },
      };
    default:
      return currentState;
  }
};

const initialState_products = {
  productName: null,
};

const productReducer = (currentState = initialState_products, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        productName: action.payLoad.productName,
      };
    default:
      return currentState;
  }
};

const initialState_todos = {
  todosList: [],
  error: "",
};

const todosReducer = (currentState = initialState_todos, action) => {
  switch (action.type) {
    case "FETCH_TODOS_SUCCESS":
      return {
        todosList: action.payLoad.todos,
      };
    case "FETCH_TODOS_FAILURE":
      return {
        error: action.payLoad.error,
      };
    default:
      return currentState;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  todos: todosReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
