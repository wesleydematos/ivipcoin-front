import {createContext, useContext} from "react"
import {iTaskContext, iTaskContextProps} from "./interfaces"

const TaskContext = createContext<iTaskContext>({} as iTaskContext)

export const TaskProvider = ({children}: iTaskContextProps) => {

    return (
        <TaskContext.Provider value={{
            
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTaskContext = () => useContext(TaskContext)