import {ReactNode} from "react"

export interface iTaskContext {
  getTasks: () => Promise<void>
  tasks: iTask[] | []
  getCurrentTasks: () => iTask[]
  TASKS_PER_PAGE: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  taskList: iTask[] | []
  getMyTaskList: () => Promise<void>
  taskListUpdate: boolean
  openCreate: boolean
  setOpenCreate: React.Dispatch<React.SetStateAction<boolean>>
  handleCreateOpen: () => void
  handleCreateClose: () => void
  openEdit: boolean
  setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>
  handleEditOpen: () => void
  handleEditClose: () => void
  task: iTask
  setTask: React.Dispatch<React.SetStateAction<iTask>>
  openDelete: boolean
  setOpenDelete: React.Dispatch<React.SetStateAction<boolean>>
  handleDeleteOpen: () => void
  handleDeleteClose: () => void
  deleteTask: (taskId: string) => Promise<void>
  createTask: (data: iCreateTask) => Promise<void>
  editTask: (data: iCreateTask) => Promise<void>
}

export interface iTaskContextProps {
  children: ReactNode
}

export interface iCreateTask{
  description: string
  title: string
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