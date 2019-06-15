import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/search/photos',
    headers: {
        Authorization: 'Client-ID 7ae388892fed792099e3a6ecd50cbb600189e1972c8fd6c6635a3af0e9e051ab'
    }
});