import React, { Component } from "react";
import { connect } from "react-redux";
import DashboardUsers from "./DashboardUsers";

class DashboardHostel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleData: false,
      searchData: [],
    };
  }

  toggleData = () => {
    this.setState((prevState) => ({
      toggleData: !prevState.toggleData,
    }));
  };

  componentDidMount() {
    this.setState({
      searchData: this.props.users,
    });
  }

  handleBranchFilter = (e) => {
    let branch = e.target.value;
    if (branch !== "ALL") {
      this.setState({
        searchData: this.props.users.filter((user) => {
          return user.branch === branch;
        }),
      });
    } else {
      this.setState({
        searchData: this.props.users,
      });
    }
  };

  handleRoomSearch = (e) => {
    let roomNumber = e.target.value;
    if (roomNumber.length > 2) {
      this.setState({
        searchData: this.props.users.filter((user) => {
          return user.roomNo && user.roomNo === roomNumber;
        }),
      });
    } else {
      this.setState({
        searchData: this.props.users,
      });
    }
  };

  handleSearch = (e) => {
    if (e.target.value.length > 3) {
      let value = e.target.value.trim().toLowerCase();
      this.setState({
        searchData: this.props.users.filter((user) => {
          return (
            user.name.toLowerCase().includes(value) ||
            user.rollNumber.includes(value)
          );
        }),
      });
    } else {
      this.setState({
        searchData: this.props.users,
      });
    }
  };

  render() {
    return (
      <>
        <div
          className="col-sm-9 mx-auto m-3 text-light"
          onClick={this.toggleData}
        >
          <div className="row mx-auto bg-danger p-3 d-flex justify-content-center align-items-center">
            <div className="col-sm-1 text-center">
              {this.state.toggleData ? (
                <i className="fas fa-arrow-circle-down "></i>
              ) : (
                  <i className="fas fa-arrow-circle-right "></i>
                )}
            </div>
            <div className="col-sm-3 border-right text-center border-light">
              {this.props.hostelCode}
            </div>
            <div className="col-sm-4 border-right border-light text-center ">
              {this.props.hostelName}
            </div>
            <div className="col-sm-4 text-center ">
              <button type="button" className="btn btn-sm btn-link text-white">
                <i class="fas fa-download mr-2"></i> Download Data
              </button>
            </div>
          </div>
        </div>

        <div
          style={{ display: this.state.toggleData ? "block" : "none" }}
          className="container"
        >
          <div className="col-sm-9 mx-auto my-4">
            <div className="row">
              <div className="col-6">
                <label>Search by roll no/name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Eg. 16001001015/Name"
                  onChange={this.handleSearch}
                ></input>
              </div>
              <div className="col-3">
                <label>Search by room no</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Eg. 205"
                  onChange={this.handleRoomSearch}
                ></input>
              </div>
              <div className="col-3">
                <label>Filter by branch</label>
                <select
                  onChange={this.handleBranchFilter}
                  className="form-control"
                >
                  <option key="default-filter-branch">ALL</option>
                  {this.props.branches.map((branch) => {
                    return <option key={branch.name}>{branch.name}</option>;
                  })}
                </select>
              </div>
            </div>
          </div>

          {this.state.searchData.length === 0 && (
            <div className=" text-center">
              <p>No result found</p>
            </div>
          )}

          {this.state.searchData.length > 0 && (
            <table className="table table-bordered  text-center">
              <thead>
                <tr>
                  <th scope="col">Roll Number</th>
                  <th scope="col">Name</th>
                  <th scope="col">Branch</th>
                  <th scope="col">Room No</th>
                  <th scope="col">Father's Name</th>
                  <th scope="col">Phone No</th>
                  <th scope="col">Email</th>
                  {/* <th scope="col">Detail</th> */}
                </tr>
              </thead>
              <tbody>
                {this.state.searchData.map((user, index) => {
                  return <DashboardUsers user={user} hostelid={this.props.hostelid} id={index}></DashboardUsers>;
                })}
              </tbody>
            </table>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  branches: state.branches,
});

export default connect(mapStateToProps)(DashboardHostel);
