import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import authReducers from "../reducers/authReducer";
import sessionReducers from "../reducers/sessionReducer";
import hostelReducer from "../reducers/hostelReducer";
import branchReducer from "../reducers/branchReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducers,
      session: sessionReducers,
      hostel: hostelReducer,
      branches: branchReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
