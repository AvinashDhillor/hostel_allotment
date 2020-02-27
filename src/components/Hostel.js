import React, { Component } from "react";
import { connect } from "react-redux";
import HostelRoomsData from "./HostelRoomsData";
import { bindActionCreators } from "redux";
import { startAddHostel, startSetHostel } from "../actions/hostel";
import HostelDetail from "./HostelDetail";

class Hostel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleForm: false,
      rooms: [],
      hostels: []
    };
  }

  componentDidMount() {
    this.props.startSetHostel();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hostels !== this.state.hostels) {
      this.setState(() => ({
        hostels: nextProps.hostels
      }));
    }
  }

  toggleHostelForm = () => {
    this.setState(prevState => ({
      toggleForm: !prevState.toggleForm
    }));
  };

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

    this.props.startAddHostel(data);
    e.target.elements.hostelname.value = "";
    e.target.elements.hostelcode.value = "";
    this.setState(() => ({
      rooms: []
    }));
  };

  render() {
    return (
      <>
        <div className="container  my-4">
          <div className="d-flex justify-content-center">
            <button
              onClick={this.toggleHostelForm}
              className="btn btn-info btn-bg my-3"
            >
              <i class="fas fa-plus-square mr-2"></i>
              ADD NEW HOSTEL
            </button>
          </div>

          <div
            class="card text-white bg-info my-3 mx-auto"
            style={{
              maxWidth: "40rem",
              display: this.state.toggleForm ? "block" : "none"
            }}
          >
            <div class="card-header bg-info text-white">
              <i class="fas fa-archway mr-2"></i>Fill Hostel Detail{" "}
            </div>
            <div class="card-body bg-white text-dark">
              <form onSubmit={this.handleHostelData} id="hostelform"></form>

              <div className="form-group">
                <label for="hostelName">Enter Hostel Name</label>
                <input
                  className="form-control"
                  type="text"
                  id="hostelName"
                  name="hostelname"
                  form="hostelform"
                  placeholder="Eg. Ks khurana Hall "
                ></input>
              </div>

              <div className="form-group">
                <label for="hostelCode">Enter Hostel Code</label>
                <input
                  className="form-control"
                  type="text"
                  name="hostelcode"
                  form="hostelform"
                  placeholder="Eg. BH-1"
                ></input>
              </div>
              <h6 class="text-center text-dark"> - Add rooms -</h6>
              <div className="col-sm-8 mx-auto">
                <table class="table table-bordered">
                  <tbody>
                    {this.state.rooms.map((room, index) => (
                      <tr key={index}>
                        <td>{room.range}</td>
                        <td>{room.occupancy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <HostelRoomsData
                handlerooms={this.handleRoomsData}
              ></HostelRoomsData>
              <button
                onClick={this.toggleHostelForm}
                type="submit"
                form="hostelform"
                className="btn btn-info btn-lg btn-block"
              >
                <i class="fas fa-paper-plane mr-2"></i>Submit
              </button>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="container my-4 ">
          {this.state.hostels.map(hostel => {
            console.log(hostel);

            return <HostelDetail hostel={hostel}></HostelDetail>;
          })}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  hostels: state.hostel
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ startAddHostel, startSetHostel }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Hostel);
