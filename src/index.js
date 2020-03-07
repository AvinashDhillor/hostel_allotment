import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// @ user
import LoadingPage from "./components/LoadingPage";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { firebase } from "./firebase/firebase";
import { logout, checkRole } from "./actions/auth";
import { history } from "./router/AppRouter";
import { startSetSession } from "./actions/session";
import { startSetHostel } from "./actions/hostel";
import { startSetBranch } from "./actions/branch";

const store = configureStore();

let jsx = (
  <Provider store={store}>
    <App></App>
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

let data = {
  type: "SET_USERS",
  users: [
    {
      hostelCode: "BH-1",
      hostelName: "Ks khurana Hall",
      users: [
        {
          id: "ashfhfdghdjsdrdfg",
          name: "Avinash",
          rollNumber: "16001001015",
          email: "avinash@gmail.com",
          branch: "BARCH",
          roomNo: 204,
          year: "2",
          fatherName: "Charanjit",
          phoneNumber: "9999999999"
        },
        {
          id: "ashfhfdghdjsdrdfg",
          name: "Avinash dhillor",
          rollNumber: "16001001011",
          email: "avinash@gmail.com",
          branch: "BTECH",
          roomNo: 206,
          year: "2",
          fatherName: "Charanjit",
          phoneNumber: "9999999999"
        }
      ]
    },
    {
      hostelCode: "GH-1",
      hostelName: "Kalpana Chawla Hall",
      users: [
        {
          id: "ashfhfdghdjsdrdfg",
          name: "Avinash",
          rollNumber: "16001001015",
          email: "avinash@gmail.com",
          branch: "b.tech",
          year: "2",
          fatherName: "Charanjit",
          phoneNumber: "9999999999"
        }
      ]
    }
  ]
};

store.dispatch(data);

ReactDOM.render(<LoadingPage />, document.getElementById("root"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(checkRole(user.email, user.uid, user.photoURL));
    store.dispatch(startSetBranch());
    store.dispatch(startSetSession()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
    store.dispatch(startSetHostel());
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});

// ReactDOM.render(jsx, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
