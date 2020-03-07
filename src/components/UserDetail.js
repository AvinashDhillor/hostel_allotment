import React from "react";

export default function UserDetail(props) {
  return <div>{props.match.params.id}</div>;
}
