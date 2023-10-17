import {BrowserRouter} from "react-router-dom"
import {RoutesMain} from "./routes"
import {UserProvider} from "./contexts/UserContext"
import {TaskProvider} from "./contexts/TaskContext"

function App() {
  return (
    <UserProvider>
      <TaskProvider>
        <BrowserRouter>
          <RoutesMain/>
        </BrowserRouter>
      </TaskProvider>
    </UserProvider>
  )
}

export default App
