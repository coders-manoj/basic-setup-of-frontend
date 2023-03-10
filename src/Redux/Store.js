import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import Reducer from "./Reducers/Reducer";

const Store = createStore(
  Reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default Store;
