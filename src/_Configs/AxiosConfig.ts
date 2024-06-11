import axios, { AxiosInstance } from 'axios'

const instance: AxiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_URL_BACKEND,
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
})

instance.interceptors.request.use(
	config => config,
	error => Promise.reject(error)
)

instance.interceptors.response.use(
	response => response,
	error => Promise.reject(error)
)

export default instance
