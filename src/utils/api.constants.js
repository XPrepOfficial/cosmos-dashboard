const urls = {
  FETCH_JOURNEY_CARD_DATA:
    "journey/stats?startDate={0}&endDate={1}&journeyId={2}",
  FETCH_CAMPAIGNS_TABLE_DATA:
    "journey/campaigns/stats?startDate={0}&endDate={1}&journeyId={2}",
  FETCH_ORG_LIST: "journey/orgs?limit={0}&offset={1}&search={2}&journeyId={3}",
  EXPORT_REPORT: "journey/reports",
  SELECT_ORGS_LIST : "journey/orgs?journeyId={0}"
};

export default (type, ...params) => {
  let url = urls[type];
  for (let i = 0; i < params.length; i += 1) {
    url = url.replace(`{${i}}`, params[i]);
  }
  return url;
};
