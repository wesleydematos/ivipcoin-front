import {Routes, Route, Navigate} from "react-router-dom"

import {useUserContext} from "./contexts/UserContext"
import {SignInPage, SignUpPage, TaskPage} from "./pages"
import {AuthRoutes, Loading} from "./components"

export const RoutesMain = () => {
  const {loading} = useUserContext()

  if(loading) return <Loading/>

  return (
    <Routes>
      <Route path="/" element={<SignInPage />}/>
      <Route path="/registro" element={<SignUpPage/>}/>
      <Route element={<AuthRoutes/>}>
        <Route path="/tarefas" element={<TaskPage/>}/>
      </Route>
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}