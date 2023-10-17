import {Dispatch, ReactNode, SetStateAction} from "react"

export interface iUserContext {
    loading: boolean
    setLoading: Dispatch<SetStateAction<boolean>>
}

export interface iUserContextProps {
    children: ReactNode
}