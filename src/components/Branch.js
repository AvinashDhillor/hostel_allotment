import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { startAddBranch, startSetBranch } from "../actions/branch";
import BranchDetail from "./BranchDetail";

class Branch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleForm: false,
      branches: []
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.branches !== this.state.branches) {
      this.setState(() => ({
        branches: nextProps.branches
      }));
    }
  }

  componentDidMount() {
    this.props.startSetBranch();
  }

  toggleBranchForm = () => {
    this.setState(prevState => ({
      toggleForm: !prevState.toggleForm
    }));
  };

  handleBranchData = e => {
    e.preventDefault();
    let data = {
      branchName: e.target.elements.branchName.value,
      duration: e.target.elements.branchDuration.value
    };

    e.target.elements.branchName.value = "";
    e.target.elements.branchDuration.value = "";
    this.props.startAddBranch(data);
  };

  render() {
    return (
      <>
        <div className="container  my-4">
          <div className="d-flex  justify-content-center">
            <button
              onClick={this.toggleBranchForm}
              className="btn btn-warning btn-bg my-3 text-light"
            >
              <i class="fas fa-plus-square mr-2"></i>
              ADD NEW BRANCH
            </button>
          </div>

          <div
            class="card text-white bg-warning my-3 mx-auto"
            style={{
              maxWidth: "40rem",
              display: this.state.toggleForm ? "block" : "none"
            }}
          >
            <div class="card-header bg-warniing text-white">
              <i class="fas fa-code-branch mr-2"></i>Fill branch detail
            </div>
            <div class="card-body bg-white text-dark">
              <form onSubmit={this.handleBranchData}>
                <div className="form-group">
                  <label for="branchName">Enter Branch Name</label>
                  <input
                    id="branchName"
                    className="form-control"
                    type="text"
                    name="branchName"
                    placeholder="Eg. BTECH "
                  ></input>
                </div>

                <div className="form-group">
                  <label for="branchDuration">Enter Branch Duration</label>
                  <input
                    className="form-control"
                    id="branchDuration"
                    type="number"
                    name="branchDuration"
                    placeholder="0 years"
                  ></input>
                </div>
                <button
                  onClick={this.toggleBranchForm}
                  type="submit"
                  className="btn btn-warning text-light btn-lg btn-block"
                >
                  <i class="fas fa-paper-plane mr-2"></i>Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr></hr>

        <div className="container my-4 ">
          {this.state.branches.map(branch => {
            console.log(branch);

            return <BranchDetail branch={branch}></BranchDetail>;
          })}
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ startAddBranch, startSetBranch }, dispatch);
};

const mapStateToProps = state => ({
  branches: state.branches
});

export default connect(mapStateToProps, mapDispatchToProps)(Branch);
