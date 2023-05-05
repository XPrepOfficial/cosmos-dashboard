export const exportReportActions = {
  EXPORT_REPORT: "EXPORT_REPORT",
  EXPORT_REPORT_SUCCESS: "EXPORT_REPORT_SUCCESS",
  EXPORT_REPORT_ERROR: "EXPORT_REPORT_ERROR",
};

export const exportReportActionCreators = {
  exportReport: (data) => ({
    type: exportReportActions.EXPORT_REPORT,
    payload: data,
  }),
  exportReportSuccess: () => ({
    type: exportReportActions.EXPORT_REPORT_SUCCESS,
  }),
  exportReportError: (payload) => ({
    type: exportReportActions.EXPORT_REPORT_ERROR,
    payload,
  }),
};
