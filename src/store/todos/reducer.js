const initState = {
  data: [],
  loading: false,
};

export default function todoReducer(state = initState, action) {
  const { type } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
  }
}
