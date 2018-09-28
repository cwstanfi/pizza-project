import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myreactapp-60c73.firebaseio.com'});

export default instance;