import { SET_BRANCHES } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case SET_BRANCHES:
      return [...action.branches];
    default:
      return state;
  }
};
