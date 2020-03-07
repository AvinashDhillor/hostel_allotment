import React, { Component } from "react";
import { connect } from "react-redux";
import DashboardHostel from "./DashboardHostel";

class Dashboard extends Component {
  render() {
    return (
      <div className="my-4">
        <hr></hr>
        <div className="container  my-4">
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
