import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LOSTARK_API_URL,
})

axiosInstance.defaults.headers.common.Authorization = `Bearer ${process.env.NEXT_PUBLIC_LOSTARK_API_KEY}`

export default axiosInstance
