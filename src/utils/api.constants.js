const urls = {
  EXPORT_REPORT: "journey/reports",
  FETCH_JOURNEY: "journey/list?limit={0}&offset={1}",
  FETCH_JOURNEY_CARD_DATA:
    "journey/stats?journeyId={0}&startDate={1}&endDate={2}",
  FETCH_CAMPAIGNS_TABLE_DATA:
    "journey/campaigns/stats?journeyId={0}&startDate={1}&endDate={2}&&limit={3}&offset={4}",
  // FETCH_ORG_LIST: "journey/orgs?limit={0}&offset={1}&search={2}&journeyId={3}",
  SELECT_ORGS_LIST: "journey/orgs?journeyId={0}&limit={1}&offset={2}",
  SELECT_SEARCH_ORGS_LIST: "journey/orgs?journeyId={0}&limit={1}&offset={2}&search={3}",
};

export default (type, ...params) => {
  let url = urls[type];
  for (let i = 0; i < params.length; i += 1) {
    url = url.replace(`{${i}}`, params[i]);
  }
  return url;
};
