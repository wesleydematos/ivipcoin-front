import {useEffect} from "react"

import {Box, List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"

import ReactPaginate from "react-paginate"

import {useTaskContext} from "../../../contexts/TaskContext"
import {iTask} from "../../../contexts/TaskContext/interfaces"
import {UpdateTaskModal} from "../UpdateTaskModal"
import {DeleteTaskModal} from "../DeleteTaskModal"
import "./index.css"

export const TaskList = () => {
  const {getCurrentTasks, TASKS_PER_PAGE, setCurrentPage, taskList, getMyTaskList, taskListUpdate, handleEditOpen, setTask, handleDeleteOpen} = useTaskContext()

  useEffect(() => {
    getMyTaskList()
  }, [taskListUpdate])

  if(taskList.length < 1){
    return <Typography>Não há tarefas para mostrar.</Typography>
  }

  return (
    <Box>
        <List className="task-list">
        {getCurrentTasks().map((task: iTask) => (
          <ListItem key={task.created_at} >
            <ListItemAvatar>
              <Avatar>
                {task.owner.username[0]}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={task.title} secondary={task.description}/>
            <EditIcon onClick={()=>{handleEditOpen(); setTask(task)}} sx={{cursor: "pointer"}}/>
            <UpdateTaskModal/>
            <DeleteIcon onClick={()=>{handleDeleteOpen(); setTask(task)}} sx={{cursor: "pointer"}}/>
            <DeleteTaskModal/>
          </ListItem>
          ))}
        </List>

      {taskList.length > TASKS_PER_PAGE && (
        <ReactPaginate
          previousLabel={"< Previous |"}
          nextLabel={"| Next >"}
          breakLabel={"..."}
          pageCount={Math.ceil(taskList.length / TASKS_PER_PAGE)}
          onPageChange={(data) => setCurrentPage(data.selected)}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      )}
    </Box>
  )
}
