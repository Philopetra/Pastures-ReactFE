import { axiosApi } from '../apiService';

interface LoginSuccessResponse {
  isSuccessful: true;
  message: string;
  data: {
    userId: string;
    username: string;
    token: string;
    message: string;
  };
}

interface LoginErrorResponse {
  isSuccessful: false;
  message: string;
  data: null; 
}

type LoginResponse = LoginSuccessResponse | LoginErrorResponse;

export const login = async (email: string, password: string): Promise<LoginResponse> => {

  try {
    const res = await axiosApi.post<LoginResponse>(`/admin/accounts/login`, {
      email,
      password,
    });

    console.log(res.data);
    
    return res.data; // Return the response data directly
  } catch (error) {
    // Handle network or unexpected errors here
    return { isSuccessful: false, message: "An error occurred. Please try again.", data: null };
  }
};