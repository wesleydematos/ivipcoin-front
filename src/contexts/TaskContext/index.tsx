import {createContext, useContext, useState} from "react"
import {iTaskContext, iTaskContextProps} from "./interfaces"
import { api } from "../../services/api"
import { useUserContext } from "../UserContext"
import {toast} from "react-toastify"

const TaskContext = createContext<iTaskContext>({} as iTaskContext)

export const TaskProvider = ({children}: iTaskContextProps) => {
  const {setLoading} = useUserContext()
  const [tasks, setTasks] = useState([])
  
  const getTasks = async (): Promise<void> => {
    setLoading(true)

    const token = localStorage.getItem("@Token-ivipcoin");
    api.defaults.headers.common.authorization = `Bearer ${token}`

    try {
      const response = await api.get('/tasks')
      setTasks(response.data)
    } catch (error) {
      toast.error("Não foi possível listar as tarefas!")
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <TaskContext.Provider value={{
      getTasks,
      tasks
    }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTaskContext = () => useContext(TaskContext)