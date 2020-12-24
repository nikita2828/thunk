import { applyMiddleware, combineReducers, createStore } from "redux";
import postReduser from "./posts/reducer";
import todoReduser from "./todos/reducer";
import logger from "redux-logger";

const rootReducer = combineReducers({
  todos: todoReduser,
  posts: postReduser,
});

const enhacer = applyMiddleware(logger);
const store = createStore(rootReducer, enhacer);

export default store;
