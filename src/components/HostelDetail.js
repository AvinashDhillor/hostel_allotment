import React, { Component } from "react";
import HostelRoomInfo from "./HostelRoomInfo";

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
    console.log("click");
  };

  render() {
    return (
      <>
        <div
          onClick={this.toggleData}
          className="col-sm-11 mx-auto m-3 text-light"
        >
          <div className="row mx-auto bg-info p-3 d-flex justify-content-center">
            <div className="col-sm-1 ">
              {this.state.toggleData ? (
                <i class="fas fa-arrow-circle-down mr-5 "></i>
              ) : (
                <i class="fas fa-arrow-circle-right mr-5 "></i>
              )}
            </div>
            <div className="col-sm-3 ">{this.props.hostel.name}</div>
            <div className="col-sm-3 ">Total Capacity : 300</div>
            <div className="col-sm-3 ">Empty cells : 20</div>
            <div className="col-sm-1 ">
              <i
                onClick={this.handleHostelDelete}
                class="fas fa-trash ml-4 text-danger"
              ></i>
            </div>
          </div>
        </div>
        <div
          style={{ display: this.state.toggleData ? "block" : "none" }}
          className="container"
        >
          {this.props.hostel.rooms.map(room => {
            return <HostelRoomInfo room={room}></HostelRoomInfo>;
          })}
        </div>
      </>
    );
  }
}

export default HostelDetail;
