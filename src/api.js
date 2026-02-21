import axios from 'axios';

// Create an instance of axios with default settings
const api = axios.create({
    baseURL: 'https://your.api.endpoint', // Replace with your API endpoint
    timeout: 1000,
});

// Function to set JWT token in headers
export const setAuthToken = (token) => {
    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common['Authorization'];
    }
};

export default api;