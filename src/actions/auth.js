import { firebase, googleAuthProvider } from "../firebase/firebase";
import database from "../firebase/firebase";

export const login = uid => ({
  type: "LOGIN",
  uid
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const checkRole = (email, uid) => {
  return dispatch => {
    database
      .ref("admins")
      .once("value")
      .then(snapshot => {
        let emailid = [];
        snapshot.forEach(element => {
          emailid.push(element.val().email);
        });
        for (let i = 0; i < emailid.length; i++) {
          if (email === emailid[i]) {
            return dispatch(login(uid));
          }
        }
        dispatch(logout());
      })
      .catch(e => console.log(e));
  };
};

export const logout = () => ({
  type: "LOGOUT"
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
