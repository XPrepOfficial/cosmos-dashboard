import { appActions } from "../../actions/appActions";
import initAppState from "../initialState/initAppState";

export default {
  appDetails: (state = initAppState.appDetails, action) => {
    const { type, payload } = action;

    switch (type) {
      case appActions.APP_LOGIN:
        return {
          ...state,
          isAuthenticated: payload,
        };
      case appActions.APP_LOGOUT:
        return {
          ...state,
          isisAuthenticated: payload,
        };
      default:
        return state;
    }
  },
};
