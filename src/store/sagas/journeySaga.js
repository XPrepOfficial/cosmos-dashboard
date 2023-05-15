import { call, put, takeLatest } from "redux-saga/effects";
import API from "../../utils/axios";
import getURL from "../../utils/api.constants";

import {
  journeyActions,
  journeyActionCreators,
} from "../../actions/journeyActions";

function* fetchJourneyData({ payload }) {
  try {
    const response = yield call(
      API.get,
      getURL(
        `${
          payload?.searchParam
            ? "FETCH_JOURNEY_SEARCH_BY_NAME"
            : "FETCH_JOURNEY"
        }`,
        payload?.limit,
        payload?.offset,
        payload?.searchParam
      )
    );
    yield put(
      journeyActionCreators.getJourneyDataSuccess(response?.data?.data)
    );
  } catch (error) {
    yield put(journeyActionCreators.getJourneyDataError(error.description));
  }
}

function* watchFetchJourneyData() {
  yield takeLatest(journeyActions.FETCH_JOURNEY_DATA, fetchJourneyData);
}

export default [watchFetchJourneyData()];
