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
        payload?.journeyId,
        payload?.limit,
        payload?.offset
      )
    );
    let data = response?.data?.data;
    let updatedData = [];
    if (data?.orgList?.length) {
      updatedData = {
        ...data,
        orgList: data.orgList.map((orgObj) => {
          return {
            value: orgObj?.orgId,
            label: orgObj?.orgId,
            key: new Date(),
          };
        }),
      };
    }
    yield put(selectOrgActionCreators.getSelectOrgDataSuccess(updatedData));
  } catch (error) {
    yield put(selectOrgActionCreators.getSelectOrgDataError(error.description));
  }
}

function* watchFetchSelectOrgData() {
  yield takeLatest(selectOrgActions.FETCH_SELECT_ORG_DATA, fetchSelectOrgData);
}

export default [watchFetchSelectOrgData()];
