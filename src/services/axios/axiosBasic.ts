import defaultAxios from "axios"
import { ENV_API_URL } from "constants/ENV_CONFIG"
import { getCookie } from "utils/cookie"

const axios = defaultAxios.create({
  baseURL: ENV_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
})

axios.interceptors.request.use(
  function (config) {
    const token = getCookie("access_token")
    if (token) {
      config.headers.Authorization = `Bearer ${JSON.parse(token)}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  async function (error) {
    if (error.response?.status === 401 && window !== undefined) {
      if (window.location.pathname === "/login") return
      window.location.href = "/login"
    }

    return Promise.reject(error)
  }
)

export default axios
