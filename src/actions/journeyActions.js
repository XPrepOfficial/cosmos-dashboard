export const journeyActions = {
  FETCH_JOURNEY_DATA: "FETCH_JOURNEY_DATA",
  FETCH_JOURNEY_DATA_SUCCESS: "FETCH_JOURNEY_DATA_SUCCESS",
  FETCH_JOURNEY_DATA_ERROR: "FETCH_JOURNEY_DATA_ERROR",
};

export const journeyActionCreators = {
  getJourneyData: (data) => ({
    type: journeyActions.FETCH_JOURNEY_DATA,
    payload: data,
  }),
  getJourneyDataSuccess: (payload) => ({
    type: journeyActions.FETCH_JOURNEY_DATA_SUCCESS,
    payload,
  }),
  getJourneyDataError: (payload) => ({
    type: journeyActions.FETCH_JOURNEY_DATA_ERROR,
    payload,
  }),
};
