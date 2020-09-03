import database from "../firebase/firebase";

/*

    DATA STATE

    state = [
        {
            "hostelCode" : "BH-1",
            "hostelname" : "Ks khurana Hall"
            "users" : [
                {
                    "id" : "ashfhfdghdjsdrdfg",
                    "name" : "Avinash",
                    "rollNumber" : "16001001015",
                    "email" : "avinash@gmail.com",
                    "branch" :"b.tech",
                    "year": "2",
                    "fatherName" : "Charanjit"
                    "phoneNumber" : "9999999999",
                }
            ]
        }
    ]

*/


export const setUser = (data) => {
    return {
        type: "SET_USERS",
        users: data
    }
}


export const startSetUsers = () => {
    return (dispatch) => {
        database.ref("hostels").once("value").then(snapshot => {
            let data = [];
            snapshot.forEach(snap => {
                let small = {
                    hostelCode: snap.key,
                    hostelName: snap.val().name,
                    users: []
                }
                data.push(small);
            })

            database.ref("users").once('value', (snapshot) => {
                if (snapshot) {
                    snapshot.forEach(snap => {
                        for (let i = 0; i < data.length; i++) {
                            if (data[i].hostelCode === snap.val().roomInfo.hostel) {
                                let snapData = snap.val();
                                let userdata = {
                                    id: snap.key,
                                    name: snapData.full_name,
                                    rollNumber: snapData.roll_number,
                                    email: snapData.email,
                                    branch: snapData.branch,
                                    roomNo: snapData.roomInfo.room_number,
                                    year: snapData.year,
                                    fatherName: snapData.father_name,
                                    phoneNumber: snapData.primary_contact,
                                    address: snapData.address,
                                    aadhaarNumber: snapData.aadhaar_number,
                                    motherName: snapData.mother_name,
                                    parentContact: snapData.parent_contact,
                                }
                                data[i].users.push(userdata);
                                break;
                            }
                        }
                    })
                }
            })
            dispatch(setUser(data));
        })

    }
}