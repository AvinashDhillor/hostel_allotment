import { ADD_HOSTEL } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_HOSTEL:
      return {
        ...state,
        ...action.data
      };

    default:
      return state;
  }
};
