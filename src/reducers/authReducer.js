export default (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(action.profileImage);

      return {
        uid: action.uid,
        name: action.name,
        profileImage: action.profileImage
      };
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};
