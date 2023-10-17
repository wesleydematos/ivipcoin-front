import {Dispatch, ReactNode, SetStateAction} from "react"

export interface iUserContext {
    loading: boolean
    setLoading: Dispatch<SetStateAction<boolean>>
    handleLogin(data: iLogin): Promise<void>
    username: string
}

export interface iUserContextProps {
    children: ReactNode
}

export interface iLogin {
    email: string;
    password: string;
}