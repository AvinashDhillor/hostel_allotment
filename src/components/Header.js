import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { startLogout } from "../actions/auth";
import { NavLink, Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <Link class="navbar-brand" to="/dashboard">
          <i class="fas fa-h-square mr-2 pl-2"></i>
          Dcrust
        </Link>

        <button
          onClick={props.startLogout}
          class="btn btn-outline-warning my-2 my-sm-0"
        >
          <i class="fas fa-sign-out-alt mr-2"></i>Logout
        </button>
      </nav>

      <ul class="nav m-1 justify-content-center">
        <li class="nav-item">
          <NavLink
            to="/dashboard"
            className="nav-link "
            activeClassName="btn btn-outline-primary"
          >
            <i class="fas fa-chart-line mr-2"></i>
            Dashboard
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink
            to="/hostels"
            className="nav-link"
            activeClassName="btn btn-outline-primary"
          >
            <i class="fas fa-hotel mr-2 "></i>
            Hostels
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink
            to="/branches"
            className="nav-link"
            activeClassName="btn btn-outline-primary"
          >
            <i class="fas fa-code-branch mr-2"></i>
            Branches
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink
            to="/session"
            className="nav-link"
            activeClassName="btn btn-outline-primary"
          >
            <i class="fas fa-history mr-2"></i>
            Session
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

const mapDispatchtoProps = dispatch => {
  return bindActionCreators({ startLogout }, dispatch);
};

export default connect(null, mapDispatchtoProps)(Header);
