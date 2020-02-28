const countTotalRooms = hostel => {
  let data = {
    totalRooms: 0,
    emptyRooms: 0
  };

  hostel.rooms.forEach(room => {
    room.occupancy.forEach(state => {
      data.totalRooms++;
      if (state.occupied === false) {
        data.emptyRooms++;
      }
    });
  });

  return data;
};

export default countTotalRooms;
