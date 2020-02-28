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

  UNSAFE_componentWillReceiveProps(nextProps) {
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
      <div className="container py-4">
        <div
          className="card  text-white bg-info m-4 mx-auto"
          style={{ maxWidth: "35rem" }}
        >
          <div className="card-header text-white">
            {" "}
            <i className="fas fa-history mr-2"></i>Hostel Sessions
          </div>
          <div className="card-body bg-info">
            <p className="display-4 text-center">Handle Session</p>
            <div className="row m-3 p-2">
              <div className="col-6 text-center border-right border-white mb-1">
                <h2>Register</h2>
                <button
                  onClick={this.handleRegister}
                  className={
                    this.state.activateRegister
                      ? "btn btn-danger"
                      : "btn btn-outline-light"
                  }
                >
                  {this.state.activateRegister ? "Deactivate" : "Activate"}
                </button>
              </div>
              <div className="col-6 text-center mb-1">
                <h2>Allotment</h2>
                <button
                  onClick={this.handleAllocate}
                  className={
                    this.state.activateAllocate
                      ? "btn btn-danger"
                      : "btn btn-outline-light"
                  }
                >
                  {this.state.activateAllocate ? "Deactivate" : "Activate"}
                </button>
              </div>
            </div>
          </div>
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
