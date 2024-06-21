import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
});

export default axiosInstance;

axiosInstance.interceptors.request.use(function (config) {
  // Do something before request is sent
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
