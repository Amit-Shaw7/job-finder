import { toast } from 'react-hot-toast';
import instance from '../../utils/axiosInstance';
import { loginSuccess } from '../reducers/AuthSlice';

export const signup = (data, navigate) => async (dispatch) => {
    const url = "/auth/register";
    let response = {};
    try {
        response = await instance.post(url, data);
    } catch (error) {
        toast.error(error?.response?.data?.msg?.split("_").join(" "));
    } finally {
        if (response?.status === 200) {
            navigate("/login");
            toast.success("Signup Succesfull");
        }
    }
};

export const login = (data, navigate) => async (dispatch) => {
    const url = `/auth/login`;
    let response = {};
    try {
        response = await instance.post(url, data);
    } catch (error) {
        toast.error(error?.response?.data?.msg?.split("_").join(" "));
    } finally {
        if (response.status === 200) {
            toast.success("Login successfull");
            dispatch(loginSuccess(response?.data?.user));
            navigate("/");
        }
    }
};

export const logoutSuccess = (navigate) => async (dispatch) => {
    const url = `/auth/logout`;
    let response = {};
    toast.loading("Logging out");
    try {
        response = await instance.get(url);
        toast.dismiss();
    } catch (error) {
        toast.error("Something wrong please try again");
    } finally {
        if (response.status === 200) {
            toast.success("Logged out successfully");
            navigate("/login");
        }
    }
};

export const loadUserIfTokenExists = (navigate) => async (dispatch) => {
    const url = `/auth/profile`;
    let response = {};
    try {
        response = await instance.get(url);
    } catch (error) {
        navigate("/login");
    } finally {
        if (response.status === 200) {
            dispatch(loginSuccess(response?.data?.user));
        } else {
            navigate("/login");
        }
    }
};