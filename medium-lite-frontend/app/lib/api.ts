import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import { ApiResponse } from './types';

// Default config
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    withCredentials: true,
});

// Request interceptor to add token if available (for API token auth)
axiosInstance.interceptors.request.use(
    (config) => {
        // Check if running in browser before accessing cookies
        if (typeof window !== 'undefined') {
            const token = Cookies.get('token');
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for global error handling
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Handle 401
        }
        return Promise.reject(error);
    }
);

// Generic GET helper
export async function get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.get(url, config);
    return response.data?.data as T;
}

// Generic POST helper
export async function post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.post(url, data, config);
    return response.data?.data as T;
}

// Generic PUT helper
export async function put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.put(url, data, config);
    return response.data?.data as T;
}

// Generic DELETE helper
export async function del<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.delete(url, config);
    return response.data?.data as T;
}

export default axiosInstance;
