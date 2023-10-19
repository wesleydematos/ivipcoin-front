import {Link, Grid, Box, Avatar, Button, TextField, Typography, Container} from "@mui/material"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"

import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

import {iLogin} from "../../contexts/UserContext/interfaces"
import {loginSchema} from "../../schemas"
import {useUserContext} from "../../contexts/UserContext"
import {Footer} from "../../components"

export const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<iLogin>({resolver: yupResolver(loginSchema)})

    const {handleLogin} = useUserContext()

  return (
    <Box 
      component="main"
      sx={{
          minWidth: "100vw",
          display: "flex",
          flexDirection: "column"
      }}
    >
      <Container maxWidth="xs" >
        <Box
          sx={{
          marginY: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          }}
        >
          <Avatar sx={{m: 1, bgcolor: "secondary.main"}}>
          <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Entrar
          </Typography>
          <Box component="form" onSubmit={handleSubmit(handleLogin)} noValidate sx={{mt: 1}}>
          <TextField
            helperText="Email obrigatório!"
            error={!!errors.email}
            {...register("email")}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            helperText="Senha obrigatória!"
            error={!!errors.password}
            {...register("password")}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item>
            <Link href="/registro" variant="body2">
              Não possui uma conta? Registre-se!
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