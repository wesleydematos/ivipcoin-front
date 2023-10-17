import {createContext, useContext, useState} from "react"
import {iLogin, iRegister, iRegisterData, iUserContext, iUserContextProps} from "./interfaces"
import {useNavigate} from "react-router-dom"
import {api} from "../../services/api"
import {toast} from "react-toastify"

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
            console.log(token);
            console.log(data.displayName)

            api.defaults.headers.common.authorization = `Bearer ${token}`

            localStorage.setItem("@Token-ivipcoin", token)

            setUsername(data.displayName)
            toast.success("Login efetuado com sucesso")
            navigate("/tarefas")
        } catch (error) {
            toast.error("Falha ao efetuar o login")
            console.log(error)
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
        } catch (error) {
            toast.error("Falha ao criar a conta, caso o erro persista tente outro email.")
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