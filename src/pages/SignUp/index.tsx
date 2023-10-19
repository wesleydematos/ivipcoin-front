import {Avatar, Button, TextField, Link, Grid, Box, Typography, Container} from "@mui/material"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"

import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

import {iRegisterData} from "../../contexts/UserContext/interfaces"
import {useUserContext} from "../../contexts/UserContext"
import {registerSchema} from "../../schemas"
import {Footer} from "../../components"

export const SignUpPage = () =>{
  const {
    register,
    handleSubmit,
    formState: {errors},
} = useForm<iRegisterData>({resolver: yupResolver(registerSchema)})

const {handleRegister} = useUserContext()

  return (
    <Box
        component="main"
        sx={{
            minWidth: "100vw",
            display: "flex",
            flexDirection: "column"
        }}
    >
      <Container maxWidth="xs">
        <Box
          sx={{
            marginY: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar sx={{m: 1, bgcolor: "secondary.main"}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registre-se
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit(handleRegister)} sx={{mt: 3}}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  helperText="Nome obrigatório!"
                  error={!!errors.firstName}
                  {...register("firstName")}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nome"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  helperText="Sobrenome obrigatório!"
                  error={!!errors.lastName}
                  {...register("lastName")}
                  required
                  fullWidth
                  id="lastName"
                  label="Sobrenome"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  helperText="Email obrigatório!"
                  error={!!errors.email}
                  {...register("email")}
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  helperText="Senha obrigatória e com mínimo de 6 caracteres!"
                  error={!!errors.password}
                  {...register("password")}
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrar
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Já possui uma conta? Entrar!
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer/>
    </Box>
  )
}