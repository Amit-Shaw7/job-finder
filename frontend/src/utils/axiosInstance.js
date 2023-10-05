import axios from 'axios';
const API_SERVER = process.env.REACT_APP_BACKEND_URI

const instance = axios.create({
    baseURL: `${API_SERVER}`,
    timeout: 10000, // Request timeout in milliseconds
    withCredentials: true, // Include credentials in cross-origin requests
    headers: {
        'Content-Type': 'application/json',
    },
});
export const jobInstance = axios.create({
    baseURL: `https://jsearch.p.rapidapi.com`,
    timeout: 10000, // Request timeout in milliseconds
    // withCredentials: true, // Include credentials in cross-origin requests
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    }
});

export default instance;