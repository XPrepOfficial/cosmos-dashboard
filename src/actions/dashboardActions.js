export const dashboardActions = {
  FETCH_JOURNEY_CARD_DATA: "FETCH_JOURNEY_CARD_DATA",
  FETCH_JOURNEY_CARD_DATA_SUCCESS: "FETCH_DATA_SUCCESS",
  FETCH_JOURNEY_CARD_DATA_ERROR: "FETCH_JOURNEY_CARD_DATA_ERROR",
  FETCH_CAMPAIGNS_TABLE_DATA: "FETCH_CAMPAIGNS_TABLE_DATA",
  FETCH_CAMPAIGNS_TABLE_DATA_SUCCESS: "FETCH_CAMPAIGNS_TABLE_DATA_SUCCESS",
  FETCH_CAMPAIGNS_TABLE_DATA_ERROR: "FETCH_CAMPAIGNS_TABLE_DATA_ERROR",
};

export const dashboardActionCreators = {
  getJourneyCardData: (data) => ({
    type: dashboardActions.FETCH_JOURNEY_CARD_DATA,
    payload: data,
  }),
  getJourneyCardDataSuccess: (payload) => ({
    type: dashboardActions.FETCH_JOURNEY_CARD_DATA_SUCCESS,
    payload,
  }),
  getJourneyCardDataError: (payload) => ({
    type: dashboardActions.FETCH_JOURNEY_CARD_DATA_ERROR,
    payload,
  }),
  getCampaignsTableData: (data) => ({
    type: dashboardActions.FETCH_CAMPAIGNS_TABLE_DATA,
    payload: data,
  }),
  getCampaignsTableDataSuccess: (payload) => ({
    type: dashboardActions.FETCH_CAMPAIGNS_TABLE_DATA_SUCCESS,
    payload,
  }),
  getCampaignsTableDataError: (payload) => ({
    type: dashboardActions.FETCH_CAMPAIGNS_TABLE_DATA_ERROR,
    payload,
  }),
};
