import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

import initAppState from "./initialState/initAppState";
import appReducer from "./reducers/appReducer";
import appSaga from "./sagas/appSaga";

import initJourneyState from "./initialState/initJourneyState";
import journeyReducer from "./reducers/journeyReducer";
import journeySaga from "./sagas/journeySaga";

import initDashboardState from "./initialState/initDashboardState";
import dashboardReducer from "./reducers/dashboardReducer";
import dashboardSaga from "./sagas/dashboardSaga";

import initSelectOrgState from "./initialState/initSelectOrgState";
import selectOrgReducer from "./reducers/selectOrgReducer";
import selectOrgSaga from "./sagas/selectOrgSaga";

import initExportReportState from "./initialState/initExportReportState";
import exportReportReducer from "./reducers/exportReportReducer";
import exportReportSaga from "./sagas/exportReportSaga";

const initialState = {
  ...initAppState,
  ...initJourneyState,
  ...initDashboardState,
  ...initSelectOrgState,
  ...initExportReportState,
};

const reducers = {
  ...appReducer,
  ...journeyReducer,
  ...dashboardReducer,
  ...selectOrgReducer,
  ...exportReportReducer,
};

function* rootSaga() {
  yield all([
    ...appSaga,
    ...journeySaga,
    ...dashboardSaga,
    ...selectOrgSaga,
    ...exportReportSaga,
  ]);
}

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers(reducers),
  initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
