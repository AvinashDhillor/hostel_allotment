import React from "react";

export default function HostelRoomInfo(props) {
  return (
    <>
      <tr>
        <td rowSpan={props.room.occupancy.length + 1}>
          {props.room.roomNumber}
        </td>
      </tr>

      {props.room.occupancy.map((detail, index) => {
        return (
          <tr key={`${index}-${props.roomNumber}`}>
            <td
              className={
                detail.occupied
                  ? "bg-danger text-light"
                  : "bg-success text-light"
              }
            >
              {detail.value}
            </td>
          </tr>
        );
      })}
    </>
  );
}
