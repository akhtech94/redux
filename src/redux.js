import { createStore} from "redux";

const initialState = {
  currentUser: null,
};

const userReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        userId: action.userDetails.userId,
        userName: action.userDetails.userName,
      };
    default:
      return currentState;
  }
};

export const store = createStore(userReducer);
