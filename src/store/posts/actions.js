import {
  GET_TODOS_ERROR,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "./constants";
export const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};
export const getTodosError = () => {
  return {
    type: GET_TODOS_ERROR,
  };
};
export const getTodosSuccess = (payload) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload,
  };
};
