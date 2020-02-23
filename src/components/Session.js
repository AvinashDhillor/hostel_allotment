import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  startSetSession,
  startSetAllocate,
  startSetRegister
} from "../actions/session";

class Session extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activateRegister: false,
      activateAllocate: false
    };
  }

  componentDidMount() {
    this.props.startSetSession();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.session.register || nextProps.session.allocate) {
      this.setState({
        activateRegister: nextProps.session.register.state,
        activateAllocate: nextProps.session.allocate.state
      });
    }
  }

  handleRegister = () => {
    let state = !this.state.activateRegister;
    this.setState(prevState => ({
      activateRegister: !prevState.activateRegister
    }));
    this.props.startSetRegister(state);
  };

  handleAllocate = () => {
    let state = !this.state.activateAllocate;
    this.setState(prevState => ({
      activateAllocate: !prevState.activateAllocate
    }));
    this.props.startSetAllocate(state);
  };

  render() {
    return (
      <div>
        <div>
          <label>Register</label>
          <button onClick={this.handleRegister}>
            {this.state.activateRegister ? "Deactivate" : "Activate"}
          </button>
        </div>
        <div>
          <label>Room Allocate</label>
          <button onClick={this.handleAllocate}>
            {this.state.activateAllocate ? "Deactivate" : "Activate"}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  session: state.session
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { startSetSession, startSetRegister, startSetAllocate },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Session);
