import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://project-astra-server.herokuapp.com'
});

export default instance;
