import React, { Component } from "react";
import { connect } from "react-redux";
import HostelRoomsData from "./HostelRoomsData";
import { bindActionCreators } from "redux";
import { startAddHostel } from "../actions/hostel";

class Hostel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    };
  }

  handleRoomsData = e => {
    e.preventDefault();

    let data = {
      range: e.target.elements.rooms.value,
      occupancy: e.target.elements.occupancy.value
    };
    this.setState(prevState => ({
      rooms: prevState.rooms.concat([data])
    }));
    e.target.elements.rooms.value = "";
    e.target.elements.occupancy.value = "";
  };

  handleHostelData = e => {
    e.preventDefault();
    let data = {
      hostelname: e.target.elements.hostelname.value,
      hostelcode: e.target.elements.hostelcode.value,
      rooms: this.state.rooms
    };
    console.log(data);

    this.props.startAddHostel(data);
    e.target.elements.hostelname.value = "";
    e.target.elements.hostelcode.value = "";
    this.setState(() => ({
      rooms: []
    }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleHostelData} id="hostelform"></form>
        <input
          type="text"
          name="hostelname"
          form="hostelform"
          placeholder="Enter hostel name : "
        ></input>
        <input
          type="text"
          name="hostelcode"
          form="hostelform"
          placeholder="Enter hostel code: eg BH-1"
        ></input>
        {this.state.rooms.map((room, index) => (
          <div key={index}>
            {room.range} - {room.occupancy}
          </div>
        ))}
        <HostelRoomsData handlerooms={this.handleRoomsData}></HostelRoomsData>
        <input type="submit" form="hostelform"></input>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ startAddHostel }, dispatch);
};

export default connect(null, mapDispatchToProps)(Hostel);
