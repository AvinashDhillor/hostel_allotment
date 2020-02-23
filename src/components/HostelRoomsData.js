import React from "react";

export default function HostelRoomsData(props) {
  return (
    <div>
      <form onSubmit={props.handlerooms}>
        <input type="text" name="rooms" id="" placeholder="210-245, 300-326" />
        <input type="number" name="occupancy" id="" />
        <input type="submit" value="Add rooms" />
      </form>
    </div>
  );
}
