export const appActions = {
  APP_LOGIN: "APP_LOGIN",
  APP_LOGIN_SUCCESS: "APP_LOGIN_SUCCESS",
  APP_LOGIN_ERROR: "APP_LOGIN_ERROR",
  APP_LOGOUT: "APP_LOGOUT",
  APP_LOGOUT_SUCCESS: "APP_LOGOUT_SUCCESS",
  APP_LOGOUT_ERROR: "APP_LOGOUT_ERROR",
};

export const appActionCreators = {
  appLogin: () => ({
    type: appActions.APP_LOGIN,
  }),
  appLoginSuccess: (payload) => ({
    type: appActions.APP_LOGIN_SUCCESS,
    payload,
  }),
  appLoginError: (payload) => ({
    type: appActions.APP_LOGIN_ERROR,
    payload,
  }),
  appLogout: () => ({
    type: appActions.APP_LOGOUT,
  }),
  appLogoutSuccess: () => ({
    type: appActions.APP_LOGOUT_SUCCESS,
  }),
  appLogoutError: (payload) => ({
    type: appActions.APP_LOGOUT_ERROR,
    payload,
  }),
};
