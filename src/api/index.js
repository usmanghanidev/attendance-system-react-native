import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  baseURL: 'https://1f07179fce05.ngrok.io',
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) config.headers.authorization = `Bearer ${token}`;

    return config;
  },
  (err) => Promise.reject(err),
);

export default instance;
