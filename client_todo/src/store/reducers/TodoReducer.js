const initialState = {
  data: [],
};
const TodoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  if (type === "TOGGLE") {
    return {
      ...state,
      data: state.data.map((info) =>
        payload._id == info._id ? { ...info, complete: !info.complete } : info
      ),
    };
  } else if (type === "SET_TEXT") {
    return {
      ...state,
      data: payload,
    };
  } else {
    return state;
  }
};
export default TodoReducer;
