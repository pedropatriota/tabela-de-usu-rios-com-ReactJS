import axios from 'axios';

const api = axios.create({
    baseURL: 'http://5e84087ca8fdea00164ac342.mockapi.io/api/v1',
});

export default api;