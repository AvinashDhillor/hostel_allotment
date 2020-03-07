import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import authReducers from "../reducers/authReducer";
import sessionReducers from "../reducers/sessionReducer";
import hostelReducer from "../reducers/hostelReducer";
import branchReducer from "../reducers/branchReducer";
import dashboardReducer from "../reducers/dashboardReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducers,
      session: sessionReducers,
      hostel: hostelReducer,
      branches: branchReducer,
      dashboard: dashboardReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
