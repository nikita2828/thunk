import {
  GET_TODOS_ERROR,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "./constants";

const initState = {
  data: [],
  loading: false,
};

export default function postReducer(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_TODOS_ERROR:
      return {
        ...state,
        loading: false,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    default:
      return {
        ...state,
      };
  }
}
