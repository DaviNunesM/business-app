import axios from 'axios';

console.log('baseurl' + import.meta.env.VITE_API_BASE_URL);
const axiosBusiness = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosBusiness;