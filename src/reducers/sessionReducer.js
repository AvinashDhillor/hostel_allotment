import { SET_SESSION, SET_REGISTER, SET_ALLOCATE } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_SESSION:
      return {
        ...action.payload
      };

    case SET_REGISTER:
      return {
        ...state,
        register: { state: action.state }
      };
    case SET_ALLOCATE:
      return {
        ...state,
        allocate: { state: action.state }
      };
    default:
      return state;
  }
};
