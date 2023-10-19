import {Dispatch, ReactNode, SetStateAction} from "react"

export interface iUserContext {
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  handleLogin(data: iLogin): Promise<void>
  username: string
  handleRegister(data: iRegisterData): Promise<void>
}

export interface iUserContextProps {
  children: ReactNode
}

export interface iLogin {
  email: string
  password: string
}

export interface iRegister {
  name: string
  email: string
  password: string
}

export interface iRegisterData {
  firstName: string
  lastName: string
  email: string
  password: string
}