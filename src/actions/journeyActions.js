export const journeyActions = {
  SET_SEARCH_LOADING: "SET_SEARCH_LOADING",
  FETCH_JOURNEY_DATA: "FETCH_JOURNEY_DATA",
  FETCH_JOURNEY_DATA_SUCCESS: "FETCH_JOURNEY_DATA_SUCCESS",
  FETCH_JOURNEY_DATA_ERROR: "FETCH_JOURNEY_DATA_ERROR",
};

export const journeyActionCreators = {
  setSearchLoading: () => ({
    type: journeyActions.SET_SEARCH_LOADING,
  }),
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
