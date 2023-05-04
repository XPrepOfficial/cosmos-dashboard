export const selectOrgActions = {
  FETCH_SELECT_ORG_DATA: "FETCH_SELECT_ORG_DATA",
  FETCH_SELECT_ORG_DATA_SUCCESS: "FETCH_SELECT_ORG_DATA_SUCCESS",
  FETCH_SELECT_ORG_DATA_ERROR: "FETCH_SELECT_ORG_DATA_ERROR",
  RESET_ORG_DATA: "RESET_ORG_DATA",
  SET_LOADING: "SET_LOADING",
};

export const selectOrgActionCreators = {
  setLoading: () => ({
    type: selectOrgActions.SET_LOADING,
  }),
  getSelectOrgData: (data) => ({
    type: selectOrgActions.FETCH_SELECT_ORG_DATA,
    payload: data,
  }),
  getSelectOrgDataSuccess: (payload) => ({
    type: selectOrgActions.FETCH_SELECT_ORG_DATA_SUCCESS,
    payload,
  }),
  getSelectOrgDataError: (payload) => ({
    type: selectOrgActions.FETCH_SELECT_ORG_DATA_ERROR,
    payload,
  }),
  resetOrgData: () => ({
    type: selectOrgActions.RESET_ORG_DATA,
  }),
};
