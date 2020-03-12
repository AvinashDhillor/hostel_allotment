import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { startLogout } from "../actions/auth";
import { NavLink, Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <Link className="navbar-brand" to="/dashboard">
          <i className="fas fa-h-square text-danger mr-2 pl-2"></i>
          Dcrust
        </Link>
        <div className="d-inline align-middle ml-auto mr-3">
          <span className="text-white mr-3 border-right border-white px-3">
            Welcome
          </span>
          <span className="text-white ">
            <div className="d-inline mr-2">
              <img
                className="rounded-circle"
                alt="100x100"
                width="25px"
                height="25px"
                src={props.profileImage}
                data-holder-rendered="true"
              />
            </div>
            {props.adminName}
          </span>
        </div>
        <button onClick={props.startLogout} className="btn btn-dark mr-2">
          <i className="fas fa-envelope"></i>
        </button>
        <button
          onClick={props.startLogout}
          className="btn btn-outline-warning "
        >
          <i className="fas fa-sign-out-alt mr-2"></i>Logout
        </button>
      </nav>

      <ul className="nav m-1 justify-content-center">
        <li className="nav-item">
          <NavLink
            to="/dashboard"
            className="nav-link "
            activeClassName="btn btn-outline-primary"
          >
            <i className="fas fa-chart-line mr-2"></i>
            Dashboard
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/notice"
            className="nav-link"
            activeClassName="btn btn-outline-primary"
          >
            <i class="fas fa-bell mr-2"></i>
            Notice
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/hostels"
            className="nav-link"
            activeClassName="btn btn-outline-primary"
          >
            <i className="fas fa-hotel mr-2 "></i>
            Hostels
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/branches"
            className="nav-link"
            activeClassName="btn btn-outline-primary"
          >
            <i className="fas fa-code-branch mr-2"></i>
            Branches
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/session"
            className="nav-link"
            activeClassName="btn btn-outline-primary"
          >
            <i className="fas fa-history mr-2"></i>
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
