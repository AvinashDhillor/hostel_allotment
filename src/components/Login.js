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
      <div>
        <button onClick={this.handleClick}>Continue with Google</button>
      </div>
    );
  }
}

const mapDispatchToprops = dispatch => {
  return bindActionCreators({ startLogin, startLogout }, dispatch);
};

export default connect(null, mapDispatchToprops)(Login);
