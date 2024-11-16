import { axiosApi } from '../apiService';

export const login = async (email: string, password: string) => {
  console.log(`Say HI @auth`);

  try {
    const res = await axiosApi.post(`/admin/accounts/login`, {
      email,
      password,
    });

    console.log(res.data);
    return res.data;
  } catch (error) {
    return error;
  }
};
