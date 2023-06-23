export default apiClient;

const axios = require('axios');

const base_url = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/";
const API_KEY = 'your_api_key'

const apiClient = axios.create({
  baseURL: base_url,
  headers: {
    'Authorization': API_KEY
  }
});

export default apiClient;