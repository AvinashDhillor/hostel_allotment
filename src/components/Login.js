import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { startLogin, startLogout } from "../actions/auth";

class Login extends Component {
  handleClick = () => {
    return this.props.startLogin();
  };

  render() {
    return (
      <div
        className="d-flex  align-items-center flex-column "
        style={{ marginTop: "200px" }}
      >
        <h1 className="display-4 mb-5">DCRUST - Admin Panel</h1>
        <button
          onClick={this.handleClick}
          type="button"
          className="btn btn-primary"
        >
          <i class="fa fa-google mr-2" aria-hidden="true"></i> Continue with
          Google
        </button>
      </div>
    );
  }
}

const mapDispatchToprops = (dispatch) => {
  return bindActionCreators({ startLogin, startLogout }, dispatch);
};

export default connect(null, mapDispatchToprops)(Login);
