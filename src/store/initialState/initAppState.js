export default {
  appDetails: {
    isAuthenticated: localStorage.getItem("auth-token") ? true : false,
    errorMessage: "",
    user: {},
  },
};
