import {ReactNode} from "react"

export interface iTaskContext {
  getTasks: () => Promise<void>
  tasks: iTask[] | []
  getFullTaskListRequest: () => Promise<iTask>
  getCurrentTasks: () => iTask[]
  TASKS_PER_PAGE: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  taskList: iTask[] | []
  getMyTaskList: () => Promise<void>
  taskListUpdate: boolean
  refreshTask: boolean,
  openCreate: boolean,
  setOpenCreate: React.Dispatch<React.SetStateAction<boolean>>
  handleCreateOpen: () => void
  handleCreateClose: () => void
}

export interface iTaskContextProps {
  children: ReactNode
}

export interface iTask {
  id: string
  owner: iOwner
  description: string
  created_at: string
  title: string
}

interface iOwner {
  user_id: string
  username: string
}