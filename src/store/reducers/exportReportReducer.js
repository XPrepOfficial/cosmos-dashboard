import { exportReportActions } from "../../actions/exportReportActions";
import initExportReportState from "../initialState/initExportReportState";

export default {
  exportReport: (state = initExportReportState.exportReport, action) => {
    const { type, payload } = action;

    switch (type) {
      case exportReportActions.EXPORT_REPORT:
        return {
          ...state,
          isLoading: true,
        };
      case exportReportActions.EXPORT_REPORT_SUCCESS:
        return {
          isLoading: false,
          errorMessage: "",
        };
      case exportReportActions.EXPORT_REPORT_ERROR:
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
