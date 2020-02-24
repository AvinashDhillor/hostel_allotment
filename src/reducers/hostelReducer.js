import { SET_HOSTELS } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case SET_HOSTELS:
      return [...action.hostels];
    default:
      return state;
  }
};
