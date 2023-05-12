import Axios from "axios";

const URL_OBJECT = () => {
  switch (import.meta.env.VITE_APP_ENV) {
    case "development":
      return "https://apip-gcp.classplusapp.com";
    case "staging":
      return "https://apip-gcp.classplusapp.com";
    case "preprod":
      return "https://apip-gcp.classplusapp.com";
    case "production":
      return "https://apip-gcp.classplusapp.com";
    default:
      return "https://apip-gcp.classplusapp.com";
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
      "eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJpZCI6NTI0MjUxMDQsIm9yZ0lkIjoxNzAsInR5cGUiOjEsIm1vYmlsZSI6IjkxNzYwNzk4NDQ0NCIsIm5hbWUiOiJIYXIiLCJlbWFpbCI6bnVsbCwiaXNJbnRlcm5hdGlvbmFsIjowLCJkZWZhdWx0TGFuZ3VhZ2UiOiJFTiIsImNvdW50cnlDb2RlIjoiSU4iLCJjb3VudHJ5SVNPIjoiOTEiLCJ0aW1lem9uZSI6IkdNVCs1OjMwIiwiaXNEaXkiOmZhbHNlLCJmaW5nZXJwcmludElkIjoiYTgxYjYxODI2OTg3N2NjYTA5MjcyZjVmMDkzNTE3NDgiLCJpYXQiOjE2ODM4ODI0MTksImV4cCI6MTY4NDQ4NzIxOX0.QW75Xr5obBt0x-_IthbiVkvRW6kS1gGOml0pjbV-PdSdWiMMAsUsW9nI6LvZfGd7";
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
