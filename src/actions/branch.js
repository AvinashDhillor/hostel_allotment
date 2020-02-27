import database from "../firebase/firebase";
import { SET_BRANCHES } from "../actions/types";

const buildBranchObject = ({ duration }) => {
  let data = {};
  for (let i = 1; i <= duration; i++) {
    data[i] = { M: "", F: "" };
  }
  return data;
};

export const startAddBranch = data => {
  return dispatch => {
    let modifiedData = buildBranchObject(data);
    database.ref(`branches/${data.branchName}`).set(modifiedData);
    dispatch(startSetBranch());
  };
};

export const startSetHostel = ({ branchName, year, gender, hostel }) => {
  return dispatch => {
    database.ref(`branches/${branchName}/${year}/${gender}`).set(hostel);
    dispatch(startSetBranch());
  };
};

// let output = [{name: "BTECH" , years : [{year: 1, gender = {"M" : "", "F" : ""} }]}]

const toStateForm = snapshot => {
  let branches = [];
  snapshot.forEach(snap => {
    let data = {};
    data["name"] = snap.key;
    data["years"] = [];
    snap.forEach(year => {
      let a = {};
      a["year"] = year.key;
      a["gender"] = year.val();
      data["years"].push(a);
    });

    branches.push(data);
  });
  return branches;
};

export const setBranches = data => ({
  type: SET_BRANCHES,
  branches: data
});

export const startSetBranch = () => {
  return dispatch => {
    database
      .ref("branches")
      .once("value")
      .then(snapshot => {
        let modifiedData = toStateForm(snapshot);
        dispatch(setBranches(modifiedData));
      });
  };
};

export const startRemoveBranch = name => {
  return dispatch => {
    database.ref(`branches/${name}`).remove();
    dispatch(startSetBranch());
  };
};
