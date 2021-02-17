import axios from "axios";
export const createdata = (state) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post("/todo", state, config);
      console.log("saved sucessfully");
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const getdata = () => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.get("/todos", config);
      dispatch({ type: "SET_TEXT", payload: data.data });
      // console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };
};
export const deletedata = (id) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = axios.delete(`/todo/${id}`, config);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
};
