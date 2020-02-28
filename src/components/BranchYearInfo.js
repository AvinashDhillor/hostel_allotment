import React, { Component } from "react";
import { startSetHostel } from "../actions/branch";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import BranchHostelMapMale from "./BranchHostelMapMale";

class BranchYearInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleModal: false,
      toggleModal2: false,
      branchName: this.props.name
    };
  }

  handleToggleModal = () => {
    this.setState(prevState => ({
      toggleModal: !prevState.toggleModal
    }));
  };

  handleToggleModal2 = () => {
    this.setState(prevState => ({
      toggleModal2: !prevState.toggleModal2
    }));
  };

  handleFormDataMale = e => {
    e.preventDefault();
    let data = {
      branchName: this.props.name,
      year: this.props.year.year,
      hostel: e.target.elements.pickhostel.value,
      gender: "M"
    };
    this.props.startSetHostel(data);
    this.handleToggleModal();
  };

  handleFormDataFemale = e => {
    e.preventDefault();
    let data = {
      branchName: this.props.name,
      year: this.props.year.year,
      hostel: e.target.elements.pickhostel.value,
      gender: "F"
    };
    this.props.startSetHostel(data);
    this.handleToggleModal2();
  };

  render() {
    return (
      <>
        <BranchHostelMapMale
          toggleModal={this.state.toggleModal}
          closeModal={this.handleToggleModal}
          submitForm={this.handleFormDataMale}
        ></BranchHostelMapMale>
        <BranchHostelMapMale
          toggleModal={this.state.toggleModal2}
          closeModal={this.handleToggleModal2}
          submitForm={this.handleFormDataFemale}
        ></BranchHostelMapMale>
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
            <button
              className="btn btn-outline-warning btn-sm"
              onClick={this.handleToggleModal2}
            >
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
