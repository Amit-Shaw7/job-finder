import { toast } from 'react-hot-toast';
import { jobInstance } from '../../utils/axiosInstance';
import { jobApplied, setJobs, startLoader, stopLoader } from '../reducers/JobSlice';

export const getJobsBySkill = (skill) => async (dispatch) => {
    dispatch(startLoader());
    const url = `/search?query=${skill}`;
    let response = {};
    try {
        console.log("Running again");
        response = await jobInstance.get(url);
    } catch (error) {
        toast.error(error?.response?.data?.msg);
    } finally {
        console.log("Running again again");
        if (response?.status === 200) {
            console.log(response?.data?.data);
            dispatch(setJobs(response?.data?.data));
            dispatch(stopLoader());
        }
    }
};
export const fetchJob = async (id) => {
    console.log("Running");
    const url = `job-details?job_id=${id}`;
    let response = {};
    try {
        console.log("Running again");
        response = await jobInstance.get(url);
    } catch (error) {
        toast.error(error?.response?.data?.msg);
    } finally {
        console.log("Running again again");
        if (response?.status === 200) {
            console.log(response?.data?.data);
            return response?.data?.data[0];
        }
    }
};

export const applyOnJob = (data) => async (dispatch) => {
    console.log(data);
    dispatch(jobApplied(data));
}
