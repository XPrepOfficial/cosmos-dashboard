import { journeyActions } from "../../actions/journeyActions";
import initJourneyState from "../initialState/initJourneyState";

export default {
  journeyDetails: (state = initJourneyState.journeyDetails, action) => {
    const { type, payload } = action;

    switch (type) {
      case journeyActions.FETCH_JOURNEY_DATA:
        return {
          ...state,
          isLoading: true,
        };
      case journeyActions.FETCH_JOURNEY_DATA_SUCCESS:
        return {
          isLoading: false,
          originalData: payload,
          data: payload,
          errorMessage: "",
        };
      case journeyActions.FETCH_JOURNEY_DATA_ERROR:
        return {
          ...state,
          isLoading: false,
          errorMessage: payload,
        };
      default:
        return state;
    }
  },
};
