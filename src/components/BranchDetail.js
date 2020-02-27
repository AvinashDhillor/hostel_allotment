import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { startRemoveBranch } from "../actions/branch";

class BranchDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleData: false
    };
  }

  toggleData = () => {
    this.setState(prevState => ({
      toggleData: !prevState.toggleData
    }));
  };

  handleBranchDelete = () => {
    this.setState(prevState => ({
      toggleData: false
    }));
    this.props.startRemoveBranch(this.props.branch.name);
  };

  render() {
    return (
      <>
        <div onClick={this.toggleData} className="col-sm-8 mx-auto m-3 ">
          <div className="row mx-auto bg-warning text-dark p-3 d-flex justify-content-center align-items-center">
            <div className="col-sm-1 text-center">
              {this.state.toggleData ? (
                <i class="fas fa-arrow-circle-down "></i>
              ) : (
                <i class="fas fa-arrow-circle-right "></i>
              )}
            </div>
            <div className="col-sm-4 border-right text-center border-light">
              {this.props.branch.name}
            </div>
            <div className="col-sm-4 border-right text-center border-light">
              Duration :
              <span class="badge badge-dark">
                {this.props.branch.years.length} years
              </span>
            </div>
            <div className="col-sm-3 d-flex justify-content-center">
              <button
                onClick={this.handleBranchDelete}
                type="button"
                class="btn btn-danger btn-sm "
              >
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
        <div
          style={{ display: this.state.toggleData ? "block" : "none" }}
          className="container"
        >
          <table class="table table-bordered col-sm-6 mx-auto text-center">
            <tbody>
              {/* this.props.hostel.rooms.map(room => {
                return <HostelRoomlight text-dark room={room}></HostelRoomwarning>;
              }) */}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ startRemoveBranch }, dispatch);
};

export default connect(null, mapDispatchToProps)(BranchDetail);
