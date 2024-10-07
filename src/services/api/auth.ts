import type { APIRes } from "types/api"
import type {
  IGetProfileMeResponse,
  ILoginWithEmailRequest,
  ILoginWithEmailResponse,
} from "types/api/auth"
import axiosBasic from "services/axios/axiosBasic"

const loginWithEmail = (body: ILoginWithEmailRequest): Promise<APIRes<ILoginWithEmailResponse>> => {
  const url = "/oauth/token"
  return axiosBasic.post(url, body)
}

const getProfileMe = (): Promise<APIRes<IGetProfileMeResponse>> => {
  const url = "/talents/me"
  return axiosBasic.get(url)
}

const AuthAPI = {
  loginWithEmail,
  getProfileMe,
}

export default AuthAPI
