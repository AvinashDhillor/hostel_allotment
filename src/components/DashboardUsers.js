import React from "react";
// import { Link } from "react-router-dom";

export default function DashboardUsers(props) {
  return (
    <tr>
      <td>{props.user.rollNumber}</td>
      <td>{props.user.name}</td>
      <td>{props.user.branch}</td>
      <td>{props.user.roomNo}</td>
      <td>{props.user.fatherName}</td>
      <td>{props.user.phoneNumber}</td>
      <td>{props.user.email}</td>
      {/* <td> */}
      {/* <Link to={`/user/avinash`} target="_blank">
          More
        </Link> */}
      {/* </td> */}
    </tr>
  );
}
