import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

//we dont have initial state for our create store
const initialState = {};

let devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
if (process.env.NODE_ENV === "prod" || process.env.NODE_ENV === "production") {
  devTools = a => a;
}

const middleware = [thunk];

//array=reducer,initialstate
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    devTools
  )
);

export default store;
applyMiddleware(...middleware);
