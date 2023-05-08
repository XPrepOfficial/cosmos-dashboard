export const StatusColorMap = {
  UPCOMING: "#F7C144",
  RUNNING: "#62D492",
  STOPPED: "#E76D69",
  DRAFT: "#94969E",
};

export const CardsColorMap = {
  ENTRIES: "pink",
  EXITS: "volcano",
  "IN JOURNEY": "gold",
  SENT: "lime",
  DELIVERED: "orange",
  CLICKS: "geekblue",
  CONVERSIONS: "green",
  REVENUE: "cyan",
};

export const CampaignTableLimit = 10;
export const JourneyTableLimit = 10;
export const selectOrgLimit = 10;

export const DummyArray8 = [0, 1, 2, 3, 4, 5, 6, 7];

export const GetDatesDaysAgo = (daysAgoVal) => {
  // get the current date
  let currentDate = new Date();

  // get end dates
  let daysAgo = new Date();
  daysAgo.setDate(currentDate.getDate() - daysAgoVal);

  // format the end date as a string
  let endDate = daysAgo.toISOString().substring(0, 10);

  return [endDate, currentDate.toISOString().slice(0, 10)];
};
