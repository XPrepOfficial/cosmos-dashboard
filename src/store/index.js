import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

import initDashboardState from "./initialState/initDashboardState";
import dashboardReducer from "./reducers/dashboardReducer";
import dashboardSaga from "./sagas/dashboardSaga";

import initSelectOrgState from "./initialState/initSelectOrgState";
import selectOrgReducer from "./reducers/selectOrgReducer";
import selectOrgSaga from "./sagas/selectOrgSaga";

import initJourneyState from "./initialState/initJourneyState";
import journeyReducer from "./reducers/journeyReducer";
import journeySaga from "./sagas/journeySaga";

const initialState = {
  ...initJourneyState,
  ...initDashboardState,
  ...initSelectOrgState,
};

const reducers = {
  ...journeyReducer,
  ...dashboardReducer,
  ...selectOrgReducer,
};

function* rootSaga() {
  yield all([...journeySaga, ...dashboardSaga, ...selectOrgSaga]);
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
