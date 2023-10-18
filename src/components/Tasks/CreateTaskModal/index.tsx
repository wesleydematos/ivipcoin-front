import {Backdrop, Box, Modal, Fade, Typography, TextField, Button} from "@mui/material"

import {useTaskContext} from "../../../contexts/TaskContext"

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

export const CreateTaskModal = () => {
  const {openCreate, handleCreateClose} = useTaskContext()

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openCreate}
      onClose={handleCreateClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      sx={{display: "flex", justifyContent: "center", alignItems: "center"}}
    >
      <Fade in={openCreate}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2" sx={{color: "#fff"}}>
            Criar tarefa
          </Typography>
          <Box component="form" sx={{mt: 1}}>
          <TextField
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
            Criar
          </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  )
}
