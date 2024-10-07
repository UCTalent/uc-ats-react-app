export interface ILoginWithEmailRequest {
  client_id: string
  client_secret: string
  grant_type: "password"
  email: string
  password: string
}

export interface ILoginWithEmailResponse {
  access_token: string
  token_type: string
  expires_in: number
  refresh_token: string
  created_at: number
  user_id: string
  user: {
    name: string
    email: string
  }
}

export interface IGetProfileMeResponse {
  email: string
  name: string
  is_confirmed: boolean
  about: string
  created_at: string
  educations: Array<{
    id: string
    degree: string
    description: string
    end_time: string
    organization: {
      name: string
    }
    start_time: string
  }>
  employment_status: string
  english_proficiency: string
  experiences: Array<{
    title: string
    start_time: string
    organization: {
      name: string
    }
    job_type: number
    job_description: string
    is_currently_working: boolean
    end_time: string
    id: string
  }>
  headline: string
  id: string
  profile_picture: {
    url: string
  }
  experience_level: string
  management_level: string
  roles: Array<{
    id: string
    name: string
  }>
  skills: Array<{
    id: string
    name: string
  }>
  specialities: Array<{
    id: string
    speciality: string
  }>
  location: {
    city: {
      id: string
      name_ascii: string
      name_local: string
      latitude: string
      longitude: string
      url_key: string
    }
    country: {
      id: string
      name: string
      code_iso2: string
      code_iso3: string
      url_key: string
    }
  }
  phone_code: string
  // links: Array<InternalLinkType>
  phone_number: string
}
