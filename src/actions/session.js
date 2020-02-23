import { SET_SESSION, SET_REGISTER, SET_ALLOCATE } from "./types";
import database from "../firebase/firebase";

export const setSession = ({ register, allocate }) => ({
  type: SET_SESSION,
  payload: {
    register,
    allocate
  }
});

export const setRegister = activate => ({
  type: SET_REGISTER,
  state: activate
});

export const setAllocate = activate => ({
  type: SET_ALLOCATE,
  state: activate
});

export const startSetAllocate = activate => {
  return dispatch => {
    database
      .ref("sessions/allocate/state")
      .set(activate)
      .then(() => {
        dispatch(setAllocate(activate));
      });
  };
};

export const startSetRegister = activate => {
  return dispatch => {
    database
      .ref("sessions/register")
      .set({ state: activate })
      .then(() => {
        dispatch(setRegister(activate));
      });
  };
};

export const startSetSession = () => {
  return dispatch => {
    database
      .ref("sessions")
      .once("value")
      .then(snapshot => {
        console.log(snapshot.val());
        dispatch(
          setSession({
            register: snapshot.val().register,
            allocate: snapshot.val().allocate
          })
        );
      });
  };
};
