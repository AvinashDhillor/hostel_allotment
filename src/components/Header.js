import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { startLogout } from "../actions/auth";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <NavLink to="/dashboard" activeClassName="active">
        Dashboard
      </NavLink>
      <NavLink to="/hostels">Hostels</NavLink>
      <NavLink to="/branches">Branches</NavLink>
      <NavLink to="/session">Session</NavLink>
      <button onClick={props.startLogout}>Logout</button>
    </div>
  );
}

const mapDispatchtoProps = dispatch => {
  return bindActionCreators({ startLogout }, dispatch);
};

export default connect(null, mapDispatchtoProps)(Header);
