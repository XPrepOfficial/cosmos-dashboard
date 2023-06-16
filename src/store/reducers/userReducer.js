import { userActions } from "../../actions/userActions";
import initUserState from "../initialState/initUserState.js";

export default {
  userDetails: (state = initUserState.userDetails, action) => {
    const { type, payload } = action;
    switch (type) {
      case userActions.SET_LOADING:
        return {
          ...state,
          isLoading: true,
        };
      case userActions.FETCH_GRAPH_CARDS_DATA:
        return {
          ...state,
          isLoading: true,
        };
      case userActions.FETCH_GRAPH_CARDS_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          graphCardData: [...payload],
        };
      case userActions.FETCH_GRAPH_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          graphData: [...payload],
        };
      default:
        return state;
    }
  },
};
