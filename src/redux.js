import { createStore } from "redux";

const initialState = {
  currentUser: null,
};

const userReducer = (currentState = initialState, action) => {
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

export const store = createStore(userReducer);
