import {ReactNode} from "react"

export interface iTaskContext {
  getTasks: () => Promise<void>
  tasks: iTask[] | []
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