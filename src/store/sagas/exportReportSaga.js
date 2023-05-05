import { call, put, takeLatest } from "redux-saga/effects";
import API from "../../utils/axios";
import getURL from "../../utils/api.constants";

import {
  exportReportActionCreators,
  exportReportActions,
} from "../../actions/exportReportActions";

function* exportReport({ payload }) {
  try {
    yield call(
      API.post,
      getURL("EXPORT_REPORT"),
      payload
    );
    yield put(exportReportActionCreators.exportReportSuccess());
  } catch (error) {
    yield put(exportReportActionCreators.exportReportError(error?.message || "Unknown Error"));
  }
}

function* watchFetchJourneyData() {
  yield takeLatest(exportReportActions.EXPORT_REPORT, exportReport);
}

export default [watchFetchJourneyData()];
