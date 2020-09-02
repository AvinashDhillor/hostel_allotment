import React, { Component } from "react";
import { connect } from "react-redux";
import DashboardHostel from "./DashboardHostel";
// import DashboardUserModel from './DashboardUserModel';

class Dashboard extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     modelState: true
  //   }
  // }

  // toggleModel = () => {
  //   this.setState(prevState => ({
  //     modelState: !prevState.modelState
  //   }))
  // }

  render() {
    return (
      <div className="my-4">
        <hr></hr>
        <div className="container  my-4">
          {/* {this.state.modelState && <DashboardUserModel className={{ position: "absolute" }}></DashboardUserModel>} */}
          {this.props.dashboard.map(data => (
            <DashboardHostel
              hostelCode={data.hostelCode}
              hostelName={data.hostelName}
              users={data.users}
            ></DashboardHostel>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dashboard: state.dashboard
});

export default connect(mapStateToProps)(Dashboard);
