import { selectOrgActions } from "../../actions/selectOrgActions";
import initSelectOrgState from "../initialState/initSelectOrgState.js";

export default {
  selectOrgDetails: (state = initSelectOrgState.selectOrgDetails, action) => {
    const { type, payload } = action;

    switch (type) {
      case selectOrgActions.FETCH_SELECT_ORG_DATA:
        return {
          ...state,
          isLoading: true,
        };
      case selectOrgActions.FETCH_SELECT_ORG_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          originalData: payload,
          data: payload,
          errorMessage: '',
        };
      case selectOrgActions.FETCH_SELECT_ORG_DATA_ERROR:
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
