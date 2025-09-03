import axios from "axios";
const instance = axios.create({
  baseURL: 'http://localhost:9999/',
  
});
export const instance2 = axios.create({
  // baseURL: 'https://jsonplaceholder.typicode.com',
  // baseURL: 'http://localhost:9999/',
  baseURL: 'https://reqres.in',
  headers: {
    'x-api-key': 'reqres-free-v1',
  }
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("check res:",response)
    return response ? response : {statusCode:response.status}; 
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
export default instance;