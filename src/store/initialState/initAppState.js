export default {
  appDetails: {
    isAuthenticated: localStorage.getItem("token") ? true : false,
    errorMessage: "",
    user: {},
  },
};
