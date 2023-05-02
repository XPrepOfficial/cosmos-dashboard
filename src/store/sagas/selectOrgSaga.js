import { call, put, takeLatest } from "redux-saga/effects";
import API from "../../utils/axios";
import getURL from "../../utils/api.constants";

import {
  selectOrgActions,
  selectOrgActionCreators,
} from "../../actions/selectOrgActions";

function* fetchSelectOrgData({ payload }) {
  try {
    const response = yield call(
      API.get,
      getURL(
        "SELECT_ORGS_LIST",
        payload?.journeyId
      )
    );
    yield put(selectOrgActionCreators.getSelectOrgDataSuccess(response?.data?.data));
  } catch (error) {
    yield put(selectOrgActionCreators.getSelectOrgDataError(error.description));
  }
}

function* watchFetchSelectOrgData() {
  yield takeLatest(
    selectOrgActions.FETCH_SELECT_ORG_DATA,
    fetchSelectOrgData
  );
}

export default [watchFetchSelectOrgData()];
