export const appActions = {
  APP_LOGIN: "APP_LOGIN",
  APP_LOGOUT: "APP_LOGOUT",
};

export const appActionCreators = {
  appLogin: () => ({
    type: appActions.APP_LOGIN,
  }),
  appLogout: () => ({
    type: appActions.APP_LOGOUT,
  }),
};
