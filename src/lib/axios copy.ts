import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Здесь позже добавим интерцепторы для токенов
// apiClient.interceptors.request.use(...)

export default apiClient;