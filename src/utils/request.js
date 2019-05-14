import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: 'https://api.github.com/repos/hkanye/blogg', // api的base_url
  timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
	// Do something before request is sent
  return config
}, error => {
	// Do something with request error
	Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
	response => response,
	error => {
		return Promise.reject(error)
	})


export default service
