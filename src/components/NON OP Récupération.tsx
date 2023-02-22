import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8080/api/locations',
  headers: {
    'Content-type': 'application/json',
  },
});
