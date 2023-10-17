import {Navigate, Outlet} from "react-router-dom"

export const AuthRoutes = () => {
  const token = localStorage.getItem("@Token-ProSupport")

  return token ? <Outlet /> : <Navigate to="/" />
}