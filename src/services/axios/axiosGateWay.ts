import defaultAxios from "axios"
import { ENV_APP_API_GW_URL, ENV_SAM_API_KEY } from "constants/ENV_CONFIG"

const axiosGateWay = defaultAxios.create({
  baseURL: ENV_APP_API_GW_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
    "x-api-key": ENV_SAM_API_KEY,
  },
})

axiosGateWay.interceptors.request.use(
  function (config) {
    return config
  },
  (error) => Promise.reject(error)
)

// Add a response interceptor
axiosGateWay.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  async function (error) {
    if (error.response?.status === 401 && typeof window !== "undefined") {
      // TODO
    }

    return Promise.reject(error)
  }
)

export default axiosGateWay
