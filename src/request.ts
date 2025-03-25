import axios from "axios";

const request = axios.create({
  baseURL: ``,
});

request.interceptors.request.use(
  (config) => {
    try {
      console.log(config);
    } catch (err) {
      console.log(err);
    }

    return config;
  },
  (error) => {
    console.log(error);
  },
);

request.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);

export { request };
