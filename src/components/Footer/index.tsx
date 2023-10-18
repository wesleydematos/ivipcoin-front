import {Typography, Container} from "@mui/material"

export const Footer = () => {
    return (
        <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 3,
          py: 3
        }}
      >
        <Typography variant="body2" color="text.secondary" align="center">
            Copyright © Gerenciador de Tarefas {new Date().getFullYear()}.
        </Typography>
      </Container>
    )
}