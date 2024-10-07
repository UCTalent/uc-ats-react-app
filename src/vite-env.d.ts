/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_API_URL: string
  readonly VITE_APP_OAUTH_APP_ID: string
  readonly VITE_APP_OAUTH_APP_SECRET: string
  readonly VITE_APP_GRAPHQL_ENDPOINT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
