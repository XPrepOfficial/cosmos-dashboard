import Axios from "axios";

const URL_OBJECT = () => {
  switch (import.meta.env.VITE_APP_ENV) {
    case "development":
      return "https://apip-qa.classplusapp.com";
    case "staging":
      return "https://apip-qa.classplusapp.com";
    case "preprod":
      return "https://apip-qa.classplusapp.com";
    case "production":
      return "https://apip-qa.classplusapp.com";
    default:
      return "https://apip-qa.classplusapp.com";
  }
};

let BASE_URL = URL_OBJECT();

const API = Axios.create({ baseURL: BASE_URL });

const getAccessToken = () => {
  const tokenData = JSON.parse(localStorage.getItem("token") || "{}");
  return (tokenData.accessToken || {}).accessToken || null;
};

API.interceptors.request.use(
  (config) => {
    const configCopy = { ...config };
    const token = getAccessToken();
    configCopy.headers["x-access-token"] =
      token ||
      "eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJpZCI6MzA4NDkxMzksIm9yZ0lkIjoxNzAsInR5cGUiOjMsIm1vYmlsZSI6IjkxNzY5NjM4MDgwMCIsIm5hbWUiOiJTb25pa2EgS3VtYXJpIiwiZW1haWwiOiJhYmhpMTIzNEB5b3Bpb21haWwuY29tIiwiaXNJbnRlcm5hdGlvbmFsIjowLCJkZWZhdWx0TGFuZ3VhZ2UiOiJFTiIsImNvdW50cnlDb2RlIjoiSU4iLCJjb3VudHJ5SVNPIjoiOTEiLCJ0aW1lem9uZSI6IkdNVCs1OjMwIiwiaXNEaXkiOmZhbHNlLCJmaW5nZXJwcmludElkIjoiYTgxYjYxODI2OTg3N2NjYTA5MjcyZjVmMDkzNTE3NDgiLCJpYXQiOjE2ODY2NDI3MzEsImV4cCI6MTY4NzI0NzUzMX0.EKd_kTgAoZ6aW4QOeBpilLx8oLYciszjHtcX8gvv1x8JP5EcZXQhvrT6I_5LSwne";
    return configCopy;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (res) => {
    return Promise.resolve(res);
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default API;
