import React, { Component } from "react";
import { connect } from "react-redux";
import HostelRoomInfo from "./HostelRoomInfo";
import { bindActionCreators } from "redux";
import { startRemoveHostel } from "../actions/hostel";

class HostelDetail extends Component {
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

  handleHostelDelete = () => {
    this.setState(prevState => ({
      toggleData: false
    }));
    this.props.startRemoveHostel(this.props.hostel.id);
  };

  render() {
    return (
      <>
        <div
          onClick={this.toggleData}
          className="col-sm-10 mx-auto m-3 text-light"
        >
          <div className="row mx-auto bg-info p-3 d-flex justify-content-center align-items-center">
            <div className="col-sm-1 text-center">
              {this.state.toggleData ? (
                <i class="fas fa-arrow-circle-down "></i>
              ) : (
                <i class="fas fa-arrow-circle-right "></i>
              )}
            </div>
            <div className="col-sm-3 border-right text-center border-light">
              {this.props.hostel.name}
            </div>
            <div className="col-sm-3 border-right text-center border-light">
              Total Capacity : <span class="badge badge-light">4</span>
            </div>
            <div className="col-sm-3 border-right text-center border-light">
              Empty cells : <span class="badge badge-light">4</span>
            </div>
            <div className="col-sm-2 d-flex justify-content-center">
              <button
                onClick={this.handleHostelDelete}
                type="button"
                class="btn btn-danger btn-sm"
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
          <div className="col-sm-6 mx-auto m-4">
            <span className="badge badge-success">O</span> - Occupied room
            <br></br>
            <span className="badge badge-danger">U</span> - Unoccupied room
          </div>
          <table class="table table-bordered col-sm-6 mx-auto text-center">
            <tbody>
              {this.props.hostel.rooms.map(room => {
                return <HostelRoomInfo room={room}></HostelRoomInfo>;
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ startRemoveHostel }, dispatch);
};

export default connect(null, mapDispatchToProps)(HostelDetail);
