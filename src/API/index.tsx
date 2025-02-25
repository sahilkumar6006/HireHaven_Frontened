import axios from "axios";


// Create an API
const api = axios.create({
  baseURL: "http://localhost:8000/api/v1", // Change this to your API base URL
  timeout: 10000, 
  headers: {
    "Content-Type": "application/json",
  },
});



// Request Interceptor
api.interceptors.request.use(
  async (config) => {

    const token = localStorage.getItem("access_token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; 
    }

    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);



// Response Interceptor
api.interceptors.response.use(
  (response) => {

    return response.data; 
  },
  (error) => {
    console.error("Response Error:", error.response);

    if (error.response) {
    
      if (error.response.status === 401) {
        console.log("Unauthorized! Redirecting to login...");

        localStorage.removeItem('access_token');
        window.location.href = '/';  // Redirect user
      }

      if (error.response.status === 403) {
        console.log("Access Denied!");
      }

      if (error.response.status === 500) {
        console.log("Server Error! Please try again later.");
      }
    } else {
      console.log("Network Error! Check your connection.");
    }

    return Promise.reject(error);
  }
);

export default api;
