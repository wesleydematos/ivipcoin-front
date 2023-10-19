import {Backdrop, Box, Modal, Fade, Typography, TextField, Button} from "@mui/material"

import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

import {useTaskContext} from "../../../contexts/TaskContext"
import {iCreateTask} from "../../../contexts/TaskContext/interfaces"
import {taskSchema} from "../../../schemas"

const style = {
  position: "absolute",
  minWidth: 300,
  maxWidth: 500,
  bgcolor: "#343434",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "black"
}

export const UpdateTaskModal = () => {
  const {openEdit, handleEditClose, editTask} = useTaskContext()

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<iCreateTask>({resolver: yupResolver(taskSchema)})

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openEdit}
      onClose={handleEditClose}
      closeAfterTransition
      slots={{backdrop: Backdrop}}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      sx={{display: "flex", justifyContent: "center", alignItems: "center"}}
    >
      <Fade in={openEdit}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2" sx={{color: "#fff"}}>
            Editar tarefa
          </Typography>
          <Box component="form" sx={{mt: 1}} noValidate onSubmit={handleSubmit(editTask)}>
          <TextField
            helperText="Título obrigatório!"
            error={!!errors.title}
            {...register("title")}
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            autoComplete="title"
            autoFocus
          />
          <TextField
            helperText="Descrição obrigatória!"
            error={!!errors.description}
            {...register("description")}
            sx={{color: "black"}}
            margin="normal"
            required
            fullWidth
            id="description"
            label="Description"
            name="description"
            autoComplete="description"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{mt: 3, mb: 2, color: "#fff", ":hover":{color: "#ffffff77"}}}
          >
            Editar
          </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  )
}
