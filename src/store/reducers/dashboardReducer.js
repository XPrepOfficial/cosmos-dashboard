import { dashboardActions } from "../../actions/dashboardActions";
import initDashboardState from "../initialState/initDashboardState";

export default {
  dashboardDetails: (state = initDashboardState.dashboardDetails, action) => {
    const { type, payload } = action;

    switch (type) {
      case dashboardActions.FETCH_JOURNEY_CARD_DATA:
        return {
          ...state,
          journeyCard: { ...state.journeyCard, isLoading: true },
        };
      case dashboardActions.FETCH_JOURNEY_CARD_DATA_SUCCESS:
        return {
          ...state,
          journeyCard: {
            errorMessage: "",
            isLoading: false,
            data: payload,
            originalData: payload,
          },
        };
      case dashboardActions.FETCH_JOURNEY_CARD_DATA_ERROR:
        return {
          ...state,
          journeyCard: {
            ...state.journeyCard,
            isLoading: false,
            errorMessage: payload,
          },
        };
      case dashboardActions.FETCH_CAMPAIGNS_TABLE_DATA:
        return {
          ...state,
          campaignsTable: { ...state.campaignsTable, isLoading: true },
        };
      case dashboardActions.FETCH_CAMPAIGNS_TABLE_DATA_SUCCESS:
        return {
          ...state,
          campaignsTable: {
            isLoading: false,
            errorMessage: "",
            data: payload,
            originalData: payload,
          },
        };
      case dashboardActions.FETCH_CAMPAIGNS_TABLE_DATA_ERROR:
        return {
          ...state,
          campaignsTable: {
            ...state.campaignsTable,
            isLoading: false,
            errorMessage: payload,
          },
        };
      default:
        return state;
    }
  },
};
