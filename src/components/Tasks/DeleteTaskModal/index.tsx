import {Backdrop, Box, Modal, Fade, Typography, Button} from "@mui/material"

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

export const DeleteTaskModal = () => {
  const {openDelete, handleDeleteClose, task} = useTaskContext()

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openDelete}
      onClose={handleDeleteClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      sx={{display: "flex", justifyContent: "center", alignItems: "center"}}
    >
      <Fade in={openDelete}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2" sx={{color: "#ff8f00"}}>
            Deletar tarefa
          </Typography>
          <Typography sx={{color: "#fff", mt: 3}}>Tem certeza que deseja deletar a tarefa "{task.title}"?</Typography>
          <Button  
            type="submit"
            fullWidth
            variant="contained"
            sx={{mt: 3, mb: 2, color: "#fff", ":hover":{color: "#ffffff77"}}}
          >
            Sim
          </Button>
        </Box>
      </Fade>
    </Modal>
  )
}
