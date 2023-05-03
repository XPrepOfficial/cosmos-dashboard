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
          isLoading: false,
          originalData: payload,
          data: {
            ...state.data,
            orgList: [...state.data.orgList, ...payload.orgList],
            totalOrgs: payload?.totalOrgs,
          },
          errorMessage: "",
        };
      case selectOrgActions.FETCH_SELECT_ORG_DATA_ERROR:
        return {
          ...state,
          isLoading: false,
          errorMessage: payload,
        };
      case selectOrgActions.RESET_ORG_DATA:
        return initSelectOrgState.selectOrgDetails;
      default:
        return state;
    }
  },
};
