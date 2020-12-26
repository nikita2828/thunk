import { applyMiddleware, combineReducers, createStore } from "redux";
import todoReduser from "./todo/reducer";
import logger from "redux-logger";
import thunk from "redux-thunk"

const rootReducer = combineReducers({
  todos: todoReduser,
});
const enhacer = applyMiddleware(logger, thunk);
const store = createStore(rootReducer, enhacer);

export default store;
