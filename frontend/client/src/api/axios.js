import axios from "axios";


const instance = axios.create({
  baseURL: 'https://luul.onrender.com/api',
  withCredentials: true,
});

export default instance;