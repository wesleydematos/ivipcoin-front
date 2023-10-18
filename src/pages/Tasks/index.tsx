import {AppBar, Box, Button, Toolbar, Typography, Container} from "@mui/material"

import {Footer} from "../../components"

export const TaskPage = () => {
  return (
    <Box component="main" sx={{minWidth: "100vw", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{borderBottom: (theme) => `1px solid ${theme.palette.text.secondary}`, color: "#fff"}}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Gerenciador de tarefas
          </Typography>
          <Button href="/" variant="contained" sx={{ my: 1, mx: 1.5, color: "#fff", ":hover":{color: "#ffffff81"} }} onClick={() => localStorage.clear()}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      {/* criar task */}
      <Container disableGutters maxWidth="lg" component="section" sx={{ pt: 8, pb: 6 }}>
        form de criar
      </Container>
      {/* Listar tasks */}
      <Container disableGutters maxWidth="lg" component="section">
        tasks
      </Container>
      {/* Footer */}
     <Footer/>
    </Box>
  )
}