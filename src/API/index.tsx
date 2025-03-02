import api from "./apiInterceptor";


type HttpMethod = "get" | "post" | "put" | "delete";
const execute = async (method : HttpMethod, url : string, data = {}, params = {}) => {
    try {

      const isFormData = data instanceof FormData;

      // Set headers 
      const headers = isFormData
        ? {}                                
        : { "Content-Type": "application/json" };

      const response = await api({
        method,
        url,
        data,
        params,
        headers
      });
      return response.data;
    } catch (error) {
      console.error(`API ${method.toUpperCase()} Error:`, error);
      throw error;
    }
  };
  
  const apiService = {
    get: (url : string, params = {}) => execute('get', url, {}, params),
    post: (url : string, data = {}) => execute('post', url, data),
    put: (url : string, data = {}) => execute('put', url, data),
    delete: (url : string, params = {}) => execute('delete', url, {}, params),
  };
  
  export default apiService;
  
