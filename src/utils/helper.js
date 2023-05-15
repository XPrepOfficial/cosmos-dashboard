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

export const getUserDetailsFromJWT = (token = localStorage.getItem(token)) => {
  if (typeof token !== "string") {
    return {};
  }

  const parts = token.split(".");
  if (parts.length !== 3) {
    return {};
  }

  const base64Url = parts[1];
  let base64;
  try {
    base64 = atob(base64Url.replace(/-/g, "+").replace(/_/g, "/"));
  } catch (error) {
    return {};
  }

  let jsonPayload;
  try {
    jsonPayload = decodeURIComponent(
      Array.prototype.map
        .call(base64, (char) => {
          return "%" + ("00" + char.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
  } catch (error) {
    return {};
  }

  let decodedPayload;
  try {
    decodedPayload = JSON.parse(jsonPayload);
  } catch (error) {
    return {};
  }
  return {
    name: decodedPayload?.name,
    picture: decodedPayload?.picture,
  };
};
