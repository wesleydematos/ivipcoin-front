import {Navigate, Outlet} from "react-router-dom"

export const AuthRoutes = () => {
  const token = localStorage.getItem("@Token-ivipcoin")

  return token ? <Outlet /> : <Navigate to="/" />
}