import { call, put, takeLatest } from "redux-saga/effects";
import API from "../../utils/axios";
import getURL from "../../utils/api.constants";

import {
  dashboardActions,
  dashboardActionCreators,
} from "../../actions/dashboardActions";

function* fetchJourneyCardData({ payload }) {
  try {
    const response = yield call(
      API.get,
      getURL(
        "FETCH_JOURNEY_CARD_DATA",
        payload?.startTime,
        payload?.endTime,
        payload?.journeyId
      )
    );
    yield put(dashboardActionCreators.getJourneyCardDataSuccess(response?.data?.data));
  } catch (error) {
    yield put(dashboardActionCreators.getJourneyCardDataError(error.description));
  }
}

function* fetchCampaignsTableData({ payload }) {
  try {
    const response = yield call(
      API.get,
      getURL(
        "FETCH_CAMPAIGNS_TABLE_DATA",
        payload?.startTime,
        payload?.endTime,
        payload?.journeyId,
        payload?.limit,
        payload?.offset,
      )
    );
    yield put(dashboardActionCreators.getCampaignsTableDataSuccess(response?.data?.data));
  } catch (error) {
    yield put(dashboardActionCreators.getCampaignsTableDataError(error.description));
  }
}

function* watchFetchDashboardData() {
  yield takeLatest(
    dashboardActions.FETCH_JOURNEY_CARD_DATA,
    fetchJourneyCardData
  );
  yield takeLatest(
    dashboardActions.FETCH_CAMPAIGNS_TABLE_DATA,
    fetchCampaignsTableData
  );
}

export default [watchFetchDashboardData()];
