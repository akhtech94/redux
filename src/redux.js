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

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
