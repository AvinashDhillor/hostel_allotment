import database from "../firebase/firebase";
import { SET_HOSTELS } from "./types";

export const setHostels = data => ({
  type: SET_HOSTELS,
  hostels: data
});

// let output = [
//   {
//     name: "krishna",
//     rooms: [{ roomNumber: 202, occupancy: [{ value: 1, occupied: false }] }]
//   }
// ];

const toStateForm = snapshot => {
  let output = [];
  snapshot.forEach(snap => {
    let data = {};
    data["id"] = snap.key;
    data["name"] = snap.val().name;
    data["rooms"] = [];
    let index = 0;
    snap.forEach(roomSnap => {
      if (roomSnap.key !== "name") {
        let roomObj = {
          roomNumber: roomSnap.key,
          occupancy: []
        };
        data["rooms"].push(roomObj);
        roomSnap.forEach(roomNumberSnap => {
          let obj = {
            value: roomNumberSnap.key,
            occupied: roomNumberSnap.val().occupied
          };
          data["rooms"][index].occupancy.push(obj);
        });
        index++;
      }
    });
    output.push(data);
  });
  return output;
};

export const startSetHostel = () => {
  return dispatch => {
    database
      .ref("hostels")
      .once("value")
      .then(snapshot => {
        let modifiedData = toStateForm(snapshot);
        dispatch(setHostels(modifiedData));
      });
  };
};

const toDatabaseForm = ({ hostelname, rooms }) => {
  let data = {};
  data["name"] = hostelname;
  rooms.forEach(room => {
    let roomRange = room.range.split(",");
    roomRange.forEach(range => {
      let arrayData = range.split("-");
      let start = arrayData[0];
      let end;
      if (arrayData.length === 1) {
        end = arrayData[0];
      } else {
        end = arrayData[1];
      }

      for (let i = start; i <= end; i++) {
        let dat = {};
        for (let j = 1; j <= room.occupancy; j++) {
          dat[j] = {
            occupied: false
          };
        }
        data[i] = dat;
      }
    });
  });
  return data;
};

export const startAddHostel = hostelData => {
  let modifiedData = toDatabaseForm(hostelData);
  return dispatch => {
    database
      .ref(`hostels/${hostelData.hostelcode}`)
      .set(modifiedData)
      .then(() => {
        dispatch(startSetHostel());
      });
  };
};

export const startRemoveHostel = id => {
  return dispatch => {
    database.ref(`hostels/${id}`).remove();
    dispatch(startSetHostel());
  };
};
