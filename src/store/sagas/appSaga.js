import { put, takeLatest } from "redux-saga/effects";
import { googleLogout } from "@react-oauth/google";

import { appActions, appActionCreators } from "../../actions/appActions";

function* appLogin({ payload }) {
  try {
    localStorage.setItem("auth-token", payload);
    yield put(appActionCreators.appLoginSuccess(payload));
  } catch (error) {
    yield put(appActionCreators.appLoginError());
  }
}

function* appLogout() {
  try {
    yield googleLogout();
    localStorage.setItem("auth-token", null);
    yield put(appActionCreators.appLogoutSuccess());
  } catch (error) {
    yield put(appActionCreators.appLogoutError(error));
  }
}

function* watchApp() {
  yield takeLatest(appActions.APP_LOGIN, appLogin);
  yield takeLatest(appActions.APP_LOGOUT, appLogout);
}

export default [watchApp()];
