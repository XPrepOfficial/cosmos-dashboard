import { call, put, takeLatest } from "redux-saga/effects";
import API from "../../utils/axios";
import getURL from "../../utils/api.constants";

import {
  selectOrgActions,
  selectOrgActionCreators,
} from "../../actions/selectOrgActions";
import { userActions, userActionCreators } from "../../actions/userActions";

function* fetchGraphData({ payload }) {
  try {
    const response = yield call(
      API.get,
      getURL(
        `FETCH_GRAPH_DATA`,
        payload?.type,
        payload?.startDate,
        payload?.endDate
      )
    );
    let data = response?.data?.data;
    yield put(userActionCreators.fetchGraphDataSuccess(data));
  } catch (error) {
    yield put(userActionCreators.fetchGraphDataError(error.description));
  }
}

function* fetchGraphCardDataSaga() {
  try {
    const response = yield call(API.get, getURL("FETCH_GRAPH_CARD_DATA"));
    let data = response?.data?.data;
    console.log(data);
    yield put(userActionCreators.fetchGraphCardsDataSuccess(data));
  } catch (error) {
    yield put(userActionCreators.fetchGraphCardsDataError(error.description));
  }
}

function* watchFetchcUserData() {
  yield takeLatest(userActions.FETCH_GRAPH_CARDS_DATA, fetchGraphCardDataSaga);
  yield takeLatest(userActions.FETCH_GRAPH_DATA, fetchGraphData);
}

export default [watchFetchcUserData()];
