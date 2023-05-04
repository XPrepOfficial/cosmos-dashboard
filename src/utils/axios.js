import Axios from "axios";

const URL_OBJECT = () => {
  switch (import.meta.env.VITE_APP_ENV) {
    case "development":
      return "http://34.110.128.108";
    case "staging":
      return "http://34.110.128.108";
    case "preprod":
      return "http://34.110.128.108";
    case "production":
      return "http://34.110.128.108";
    default:
      return "http://34.110.128.108";
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
    console.log("here", config)
    const configCopy = { ...config };
    const token = getAccessToken();
    configCopy.headers["x-access-token"] =
      token ||
      "eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJpZCI6MjY1MDIwMjcsIm9yZ0lkIjoxNzAsInR5cGUiOjMsIm1vYmlsZSI6IjkxNzA0Mjg4NDYwOCIsIm5hbWUiOiJHZW9SZXBvcnRzIEJ5IENsYXNzcGx1cyIsImVtYWlsIjoiYXl1c2gubWlzaHJhQGNsYXNzcGx1cy5jbyIsImlzSW50ZXJuYXRpb25hbCI6MCwiZGVmYXVsdExhbmd1YWdlIjoiRU4iLCJjb3VudHJ5Q29kZSI6IklOIiwiY291bnRyeUlTTyI6IjkxIiwidGltZXpvbmUiOiJHTVQrNTozMCIsImlzRGl5IjpmYWxzZSwiZmluZ2VycHJpbnRJZCI6IjM2MDVmYzFkOTJhNGJiNWUxZGYyMzc5NzhmY2E2MmYwIiwiaWF0IjoxNjgzMTg4ODk5LCJleHAiOjE2ODM3OTM2OTl9.p-7sic2F9kIlaYpRw6K9ndnQvBaxZ1k7ldQMSpzR6563o1gb9JhOFPPYMv6G7jYL";
    return configCopy;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  res => {
    return Promise.resolve(res);
  },
  err => {
    return Promise.reject(err);
  }
);

export default API;
