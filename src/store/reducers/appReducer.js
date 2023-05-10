import { appActions } from "../../actions/appActions";
import initAppState from "../initialState/initAppState";
import { getUserDetailsFromJWT } from "../../utils/helper";

export default {
  appDetails: (state = initAppState.appDetails, action) => {
    const { type, payload } = action;

    switch (type) {
      case appActions.APP_LOGIN_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          errorMessage: "",
          user: getUserDetailsFromJWT(payload?.credential),
        };
      case appActions.APP_LOGIN_ERROR:
        return {
          isAuthenticated: false,
          errorMessage: payload,
          user: {},
        };
      case appActions.APP_LOGOUT_SUCCESS:
        return {
          isAuthenticated: false,
          errorMessage: "",
          user: {},
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
