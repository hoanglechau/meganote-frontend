import axios from "axios";

/**
 * @description This file is used to create a axios instance
 * @author [Hoang Le Chau](https://github.com/hoanglechau)
 */

const apiService = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
});

apiService.interceptors.request.use(
  request => {
    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);

apiService.interceptors.response.use(
  response => {
    return response.data;
  },
  function (error) {
    const message = error.response?.data?.message || "Unknown error";
    return Promise.reject({ message });
  }
);

export default apiService;
