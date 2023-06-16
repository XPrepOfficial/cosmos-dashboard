export const userActions = {
  FETCH_GRAPH_CARDS_DATA: "FETCH_GRAPH_CARDS_DATA",
  FETCH_GRAPH_CARDS_DATA_SUCCESS: "FETCH_GRAPH_CARDS_DATA_SUCCESS",
  FETCH_GRAPH_CARDS_DATA_ERROR: "FETCH_GRAPH_CARDS_DATA_ERROR",
  FETCH_GRAPH_DATA: "FETCH_GRAPH_DATA",
  FETCH_GRAPH_DATA_SUCCESS: "FETCH_GRAPH_DATA_SUCCESS",
  FETCH_GRAPH_DATA_ERROR: "FETCH_GRAPH_DATA_ERROR",
  SET_LOADING: "SET_LOADING",
};

export const userActionCreators = {
  // setLoading: () => ({
  //   type: selectOrgActions.SET_LOADING,
  // }),
  fetchGraphCardsData: () => ({
    type: userActions.FETCH_GRAPH_CARDS_DATA,
  }),
  fetchGraphCardsDataSuccess: (payload) => ({
    type: userActions.FETCH_GRAPH_CARDS_DATA_SUCCESS,
    payload,
  }),
  fetchGraphCardsDataError: (payload) => ({
    type: userActions.FETCH_GRAPH_CARDS_DATA_ERROR,
    payload,
  }),
  fetchGraphData: (payload) => ({
    type: userActions.FETCH_GRAPH_DATA,
    payload,
  }),
  fetchGraphDataSuccess: (payload) => ({
    type: userActions.FETCH_GRAPH_DATA_SUCCESS,
    payload,
  }),
  fetchGraphDataError: (payload) => ({
    type: userActions.FETCH_GRAPH_DATA_ERROR,
    payload,
  }),
};
