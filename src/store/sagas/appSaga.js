import { put, takeLatest } from "redux-saga/effects";

import { appActions, appActionCreators } from "../../actions/appActions";

function* appLogin() {
  try {
    yield put(appActionCreators.appLogin());
  } catch (error) {
    console.log("error", error);
  }
}

function* appLogout() {
  try {
    yield put(appActionCreators.appLogout());
  } catch (error) {
    console.log("error", error);
  }
}

function* watchAppLogin() {
  yield takeLatest(appActions.FETCH_JOURNEY_DATA, appLogin);
}

function* watchAppLogout() {
  yield takeLatest(appActions.FETCH_JOURNEY_DATA, appLogout);
}

export default [watchAppLogin(), watchAppLogout()];
