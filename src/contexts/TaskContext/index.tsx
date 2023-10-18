import {createContext, useContext, useState} from "react"

import {toast} from "react-toastify"

import {iCreateTask, iTask, iTaskContext, iTaskContextProps} from "./interfaces"
import {api} from "../../services/api"
import { useUserContext } from "../UserContext"

const TaskContext = createContext<iTaskContext>({} as iTaskContext)

export const TaskProvider = ({children}: iTaskContextProps) => {
  const {setLoading} = useUserContext()
  const TASKS_PER_PAGE = 5
  const [tasks, setTasks] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [taskList, setTaskList] = useState([])
  const [taskListUpdate, setTaskListUpdate] = useState(false)
  const [refreshTask] = useState(false)
  const [openCreate, setOpenCreate] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)
  const [task, setTask] = useState({} as iTask)

  const handleCreateOpen = () => setOpenCreate(true)
  const handleCreateClose = () => setOpenCreate(false)
  const handleEditOpen = () => setOpenEdit(true)
  const handleEditClose = () => setOpenEdit(false)
  const handleDeleteOpen = () => setOpenDelete(true)
  const handleDeleteClose = () => setOpenDelete(false)

  const getTasks = async () => {
    const token = localStorage.getItem("@Token-ivipcoin")
    api.defaults.headers.common.authorization = `Bearer ${token}`

    try {
      const response = await api.get('/tasks')
      setTasks(response.data)
      return response.data
    } catch (error) {
      toast.error("Não foi possível listar as tarefas!")
      console.log(error)
    } 
  }
  
  const getMyTaskList = async () => {
    const userId = localStorage.getItem("@userId")
    const taskListData = await getTasks()
    const currentUserTasks = taskListData.filter((task: iTask) =>  task.owner.user_id === userId)
    
    setTaskList(currentUserTasks)
  }
  
  const getCurrentTasks = () => {
    const startIndex = currentPage * TASKS_PER_PAGE
    const endIndex = startIndex + TASKS_PER_PAGE
    return taskList.slice(startIndex, endIndex)
  }

  const deleteTask = async (taskId: string) => {
    setLoading(true)
    try {
      await api.delete(`/tasks/${taskId}`)
      await getMyTaskList()
      setTaskListUpdate(!taskListUpdate)
      handleDeleteClose()
      toast.success("Tarefa deletada com sucesso!")
    } catch (error) {
      console.log(error)
      toast.success("Não foi possível deletar a tarefa!")
    }finally{
      setLoading(false)
    }
  }

  const createTask = async (data: iCreateTask) => {
    setLoading(true)
    
    try {
      await api.post("/tasks", data)
      await getMyTaskList()
      setTaskListUpdate(!taskListUpdate)
      handleCreateClose()
      toast.success("Tarefa criada com sucesso!")
    } catch (error) {
      console.log(error)
      toast.success("Não foi possível criar a tarefa!")
    } finally {
      setLoading(false)
    }
  }

  const editTask = async (data: iCreateTask) => {
    setLoading(true)
    
    try {
      await api.patch(`/tasks/${task.id}`, data)
      await getMyTaskList()
      setTaskListUpdate(!taskListUpdate)
      handleEditClose()
      toast.success("Tarefa editada com sucesso!")
    } catch (error) {
      console.log(error)
      toast.success("Não foi possível editar a tarefa!")
    } finally{
      setLoading(false)
    }
  }

  return (
    <TaskContext.Provider value={{
      getTasks,
      tasks, 
      getCurrentTasks,
      TASKS_PER_PAGE,
      setCurrentPage,
      taskList,
      getMyTaskList,
      taskListUpdate,
      refreshTask,
      openCreate,
      setOpenCreate,
      handleCreateClose,
      handleCreateOpen,
      openEdit,
      setOpenEdit,
      handleEditOpen,
      handleEditClose,
      task,
      setTask,
      openDelete,
      setOpenDelete,
      handleDeleteOpen,
      handleDeleteClose,
      deleteTask,
      createTask,
      editTask
    }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTaskContext = () => useContext(TaskContext)