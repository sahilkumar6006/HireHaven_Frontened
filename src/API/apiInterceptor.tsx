import axios from 'axios';

// Create Axios instance
const api = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Flag to track token refresh
let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

// Function to store token
const setToken = (token: string): void => {
    if (!token) {
      console.warn("Invalid token: Token is empty or undefined");
      return;
    }
    localStorage.setItem("access_token", token);
  };
  

// Function to get token
const getToken = () => {
  return localStorage.getItem('access_token');
};

// Function to refresh token
const refreshToken = async () => {
  try {
    const refresh_token = localStorage.getItem('refresh_token');
    if (!refresh_token) throw new Error('No refresh token available');

    const response = await axios.post('http://localhost:8000/api/v1/auth/refresh', { refresh_token }); // repalce this with   actual route

    setToken(response.data.accessToken);
    return response.data.accessToken;
  } catch (error) {
    console.error('Refresh token failed:', error);
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    window.location.href = '/login'; // Redirect to login if refresh fails
    return null;
  }
};

// Request Interceptor - Attach token to headers
api.interceptors.request.use(
  async (config) => {
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor - Handle token expiration and refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve) => {
          refreshSubscribers.push((token) => {
            originalRequest.headers['Authorization'] = `Bearer ${token}`;
            resolve(api(originalRequest));
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const newToken = await refreshToken();
        isRefreshing = false;
        refreshSubscribers.forEach((callback) => callback(newToken));
        refreshSubscribers = [];
        originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
        return api(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default api;