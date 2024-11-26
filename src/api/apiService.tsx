import axios from 'axios';
import config from '../../config';

export const axiosApi = axios.create({
  baseURL: config.API_BASE_URL,
});

interface ValidationError {
  [key: string]: string[]; 
}

interface ApiErrorResponse {
  type: string; 
  title: string; 
  status: number; 
  errors: ValidationError; 
  traceId: string;
}


axiosApi.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error);

    if (error.code === 'ECONNABORTED') {
      return Promise.reject(new Error('Network request timed out'));
    }

    if (error.response) {
      const { status, data } = error.response;

      if (status === 400) {
        // Handle validation errors specifically
        const apiError: ApiErrorResponse = data;
        console.error(apiError.title); 

        // You can format the error messages as needed
        const errorMessages = Object.entries(apiError.errors).map(
          ([field, messages]) => `${field}: ${messages.join(', ')}`
        );

        return Promise.reject(new Error(`Validation errors: ${errorMessages.join('; ')}`));
      }

      if (status === 500) {
        return Promise.reject(new Error('Server error'));
      }
      
      // Handle other specific status codes as needed
    }

    return Promise.reject(error);
  },
);