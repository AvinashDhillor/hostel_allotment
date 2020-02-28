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
          <i class="fas fa-h-square text-danger mr-2 pl-2"></i>
          Dcrust
        </Link>
        <div className="d-inline align-middle ml-auto mr-3">
          <span className="text-white mr-3 border-right border-white px-3">
            Welcome
          </span>
          <span className="text-white rounded-pill p-2 bg-info">
            <div class="d-inline mr-2">
              <img
                class="rounded-circle"
                alt="100x100"
                width="25px"
                height="25px"
                src={props.profileImage}
                data-holder-rendered="true"
              />
            </div>
            <small className="mr-1">{props.adminName}</small>
          </span>
        </div>
        <button onClick={props.startLogout} class="btn btn-dark mr-2">
          <i class="fas fa-envelope"></i>
        </button>
        <button onClick={props.startLogout} class="btn btn-outline-warning ">
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

const mapStateToProps = state => ({
  adminName: state.auth.name,
  profileImage: state.auth.profileImage
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ startLogout }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
