import database from "../firebase/firebase";
import { ADD_HOSTEL } from "./types";

export const addHostel = data => ({
  type: ADD_HOSTEL,
  data
});

export const startAddHostel = ({ hostelname, hostelcode, rooms }) => {
  let data = {};
  data[hostelcode] = {
    name: hostelname
  };
  rooms.forEach(room => {
    let roomRange = room.range.split(",");
    roomRange.forEach(range => {
      let start = range.split("-")[0];
      let end = range.split("-")[1];
      for (let i = start; i <= end; i++) {
        let dat = {};
        for (let j = 1; j <= room.occupancy; j++) {
          dat[j] = {
            occupied: false
          };
        }
        data[hostelcode][i] = dat;
      }
    });
  });
  return dispatch => {
    database.ref("hostels").set(data);
  };
};
