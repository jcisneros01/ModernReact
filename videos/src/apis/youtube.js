import axios from 'axios';

const KEY = 'AIzaSyCa4sB0uNbCRzHEE6KJjHFfHfO6gzQPM-M';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});