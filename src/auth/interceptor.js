import axios from "axios";

// export const api = axios.create({
//   baseURL: process.env.REACT.APP_API_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export const apiSecure = axios.create({
//   baseURL: process.env.REACT.APP_API_URL,
//   headers: {
//     Authorization: localStorage.getItem("token1"),
//     "Content-Type": "application/json",
//   },
// });

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    let token = localStorage.getItem("token1");
    if (token) {
      config.headers["Authorization"] = token;
      //axios.defaults.headers.common["Authorization"] = token;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const originalRequest = error.config;
    if (error.response.status === 401) {
      //router.push('/login')
      return Promise.reject(error);
    }

    //refresh token
    // if(){}
    return Promise.reject(error);
  }
);

export default axiosInstance;
