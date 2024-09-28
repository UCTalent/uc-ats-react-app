import { Outlet, ScrollRestoration } from "react-router-dom"

const AppLayout = () => (
  <>
    <ScrollRestoration />
    <Outlet />
  </>
)

export default AppLayout
