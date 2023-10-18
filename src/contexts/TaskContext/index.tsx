import {createContext, useContext, useState} from "react"
import {iTask, iTaskContext, iTaskContextProps} from "./interfaces"
import {api} from "../../services/api"
import {toast} from "react-toastify"

const TaskContext = createContext<iTaskContext>({} as iTaskContext)

export const TaskProvider = ({children}: iTaskContextProps) => {
  const TASKS_PER_PAGE = 5
  const [tasks, setTasks] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [taskList, setTaskList] = useState([])
  const [taskListUpdate, setTaskListUpdate] = useState(false)
  const [refreshTask] = useState(false)
  const [openCreate, setOpenCreate] = useState(false)

  const handleCreateOpen = () => setOpenCreate(true);
  const handleCreateClose = () => setOpenCreate(false);


  const getFullTaskListRequest = async () => {
    try {
        const response = await api.get('/tasks')
        return response.data
    } catch (error) {
        console.log(error)
    }
  }

  const getTasks = async (): Promise<void> => {
    const token = localStorage.getItem("@Token-ivipcoin");
    api.defaults.headers.common.authorization = `Bearer ${token}`

    try {
      const response = await api.get('/tasks')
      setTasks(response.data)
    } catch (error) {
      toast.error("Não foi possível listar as tarefas!")
      console.log(error)
    } 
  }

  const getCurrentTasks = () => {
    const startIndex = currentPage * TASKS_PER_PAGE;
    const endIndex = startIndex + TASKS_PER_PAGE;
    return taskList.slice(startIndex, endIndex);
  }

  const getMyTaskList = async () => {
    const userId = localStorage.getItem("@userId")
    const taskListData = await getFullTaskListRequest()
    const currentUserTasks = taskListData.filter((task: iTask) =>  task.owner.user_id === userId)

    setTaskList(currentUserTasks)
  }
  

  return (
    <TaskContext.Provider value={{
      getTasks,
      tasks, 
      getFullTaskListRequest, 
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
      handleCreateOpen
    }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTaskContext = () => useContext(TaskContext)