import React, { Component } from "react";
import { startSetHostel } from "../actions/branch";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import BranchHostelMap from "./BranchHostelMap";

class BranchYearInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleModal: false
    };
  }

  handleToggleModal = () => {
    this.setState(prevState => ({
      toggleModal: !prevState.toggleModal
    }));
  };

  handleFormData(e) {
    e.preventDefault();
    let data = {
      branchName: this.props.name,
      year: this.props.year.year,
      hostel: e.target.elements.hostelCode.value
    };
  }

  render() {
    return (
      <>
        <BranchHostelMap
          toggleModal={this.state.toggleModal}
          closeModal={this.handleToggleModal}
        ></BranchHostelMap>
        <tr>
          <th scope="row" rowSpan="2">
            {this.props.year.year}
          </th>
          <td>Male</td>
          <td>{this.props.year.gender.M}</td>

          <td>
            <button
              className="btn btn-outline-warning btn-sm"
              onClick={this.handleToggleModal}
            >
              {this.props.year.gender.M === "" ? "Assign" : "Re-assign"}
            </button>
          </td>
        </tr>
        <tr>
          <td>Female</td>
          <td>{this.props.year.gender.F}</td>
          <td>
            <button className="btn btn-outline-warning btn-sm">
              {this.props.year.gender.F === "" ? "Assign" : "Re-assign"}
            </button>
          </td>
        </tr>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ startSetHostel }, dispatch);
};

export default connect(null, mapDispatchToProps)(BranchYearInfo);
