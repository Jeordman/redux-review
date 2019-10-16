//axios is imported so we can connect to the back end
import axios from "axios";
//we import the action types that we will need
//for our switch statement at the bottom
import { GET_LIST } from "./actionTypes";
//we choose what we want for this reducer's initial state
const initialState = {
  list: []
};
//we export this function to allow us to use it elsewhere
export const getList = () => {
  //we make a variable to hold the result of our get request
  let data = axios.get("/api/list").then(res => res.data);
  return {
    type: GET_LIST,
    payload: data
  };
};


export default function(state = initialState, action) {
  //we will use a switch statement to determine
  //what happens for every circumstance
  //you can think of this as a big if, else if, and else statement
  const { type, payload } = action;
  switch (type) {
    case GET_LIST + "_FULFILLED":
      return { list: payload };
    default:
      return state;
  }
}
