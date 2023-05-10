import { appActions } from "../../actions/appActions";
import initAppState from "../initialState/initAppState";

export default {
  appDetails: (state = initAppState.appDetails, action) => {
    const { type, payload } = action;

    switch (type) {
      case appActions.APP_LOGIN_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          errorMessage: "",
        };
      case appActions.APP_LOGIN_ERROR:
        return {
          ...state,
          isAuthenticated: false,
          errorMessage: payload,
        };
      case appActions.APP_LOGOUT_SUCCESS:
        return {
          ...state,
          isAuthenticated: false,
          errorMessage: "",
        };
      case appActions.APP_LOGOUT_ERROR:
        return {
          ...state,
          errorMessage: payload,
        };
      default:
        return state;
    }
  },
};
