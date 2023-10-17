import {BrowserRouter} from "react-router-dom"
import {RoutesMain} from "./routes"
import {UserProvider} from "./contexts/UserContext"
import {TaskProvider} from "./contexts/TaskContext"

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <TaskProvider>
          <RoutesMain/>
        </TaskProvider>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
