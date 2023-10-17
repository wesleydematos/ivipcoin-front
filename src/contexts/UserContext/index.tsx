import {createContext, useContext, useState} from "react"
import {iUserContext, iUserContextProps} from "./interfaces"

const UserContext = createContext<iUserContext>({} as iUserContext)

export const UserProvider = ({children}: iUserContextProps) => {
    const [loading, setLoading] = useState<boolean>(false)

    return (
        <UserContext.Provider value={{
            loading,
            setLoading
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext)