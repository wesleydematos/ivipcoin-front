import {createContext, useContext, useState} from "react"
import {useNavigate} from "react-router-dom"

import {toast} from "react-toastify"

import {iLogin, iRegister, iRegisterData, iUserContext, iUserContextProps} from "./interfaces"
import {api} from "../../services/api"

const UserContext = createContext<iUserContext>({} as iUserContext)

export const UserProvider = ({children}: iUserContextProps) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false)
  const [username, setUsername] = useState("")

  async function handleLogin(body: iLogin) {
    setLoading(true)

    try {
      const {data} = await api.post("user/login", body)
      const token = data.stsTokenManager.accessToken

      api.defaults.headers.common.authorization = `Bearer ${token}`

      localStorage.setItem("@Token-ivipcoin", token)
      localStorage.setItem("@username", data.displayName)
      localStorage.setItem("@userId", data.uid)
      
      setUsername(data.displayName)
      toast.success("Login efetuado com sucesso!")
      navigate("/tarefas")
    } catch (error: any) {
      toast.error(error.response.data.message || "Erro ao efetuar login!")
    } finally {
      setLoading(false)
    }
  }

  async function handleRegister(data: iRegisterData) {
    setLoading(true)
    const userData: iRegister = {email: data.email, password: data.password, name: `${data.firstName} ${data.lastName}`}

    try {
      await api.post("/user", userData)
      toast.success("Conta criada com sucesso!")
      navigate("/");
    } catch (error: any) {
      const message = error.response.data.message.code === "auth/email-already-in-use" ? "Email já cadastrado!" : "Falha ao registrar a conta!"
      toast.error(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <UserContext.Provider value={{
      loading,
      setLoading,
      handleLogin, 
      username,
      handleRegister
    }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)