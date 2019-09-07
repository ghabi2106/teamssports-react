import axios from './config';

export default {
  setupInterceptors: () => {

    axios.interceptors.request.use((config) => {
      // document.body.style.background = "red";
      return config;
    }, (error) => {
      // document.body.style.background = "white";
      return Promise.reject(error);
    });

    // Add a response interceptor
    axios.interceptors.response.use(function (response) {
      // document.body.style.background = "white";
      return response;
    }, function (error) {
      // document.body.style.background = "white";
    });
  }
};