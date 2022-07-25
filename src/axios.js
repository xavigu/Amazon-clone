import axios from 'axios';

const instance = axios.create({
  //The API (cloud function) local URL (change to the API in functions section of Firebase if you change to paid plan)
  baseURL: 'http://localhost:5001/clone-84b1f/us-central1/api'
});

export default instance;