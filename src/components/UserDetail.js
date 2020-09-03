import React, { Component } from 'react'
import database from "../firebase/firebase";

export class UserDetail extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    database.ref(`users/${this.props.match.params.id}`).once('value').then(snapshot => {
      this.setState({
        user: snapshot.val()
      })
    })
  }

  render() {
    return (
      <div className="col-sm-7 mx-auto" style={{
        marginTop: "60px",
        marginBottom: "150px"
      }
      }>
        {
          this.state.user && (
            <table class="table table-striped text-center">
              <thead>
                <tr>
                  <th colspan="2">Personal Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Name</th>
                  <td>{this.state.user.full_name}</td>
                </tr>
                <tr>
                  <th scope="row">Roll Number</th>
                  <td>{this.state.user.roll_number}</td>
                </tr>
                <tr>
                  <th scope="row">Gender</th>
                  <td>{this.state.user.gender}</td>
                </tr>
                <tr>
                  <th scope="row">Branch</th>
                  <td>{this.state.user.branch}</td>
                </tr>
                <tr>
                  <th scope="row">Course</th>
                  <td>{this.state.user.course}</td>
                </tr>
                <tr>
                  <th scope="row">Year</th>
                  <td>{this.state.user.year}</td>
                </tr>
                <tr>
                  <th scope="row">Personal Phone no.</th>
                  <td>{this.state.user.primary_contact}</td>
                </tr>
                <tr>
                  <th scope="row">Email</th>
                  <td>{this.state.user.email}</td>
                </tr>
                <tr>
                  <th scope="row">Address</th>
                  <td>{this.state.user.address}</td>
                </tr>

                <tr>
                  <th colspan="2">Parents Details</th>
                </tr>

                <tr>
                  <th scope="row">Father's name</th>
                  <td>{this.state.user.father_name}</td>
                </tr>


                <tr>
                  <th scope="row">Mother's name</th>
                  <td>{this.state.user.mother_name}</td>
                </tr>
                <tr>
                  <th scope="row">Parents phone no</th>
                  <td>{this.state.user.parent_contact}</td>
                </tr>

                <tr>
                  <th colspan="2">Other Details</th>
                </tr>
                <tr>
                  <th scope="row">Aadhaar  no.</th>
                  <td>{this.state.user.aadhaar_number}</td>
                </tr>
                <tr>
                  <th scope="row">Account  no.</th>
                  <td>{this.state.user.account_number}</td>
                </tr>

              </tbody>
            </table>
          )
        }
      </div >
    )
  }
}

export default UserDetail
