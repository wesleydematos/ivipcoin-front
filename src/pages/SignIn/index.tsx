import {Link, Grid, Box, Avatar, Button, TextField, Typography, Container} from "@mui/material"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 6, mb: 4 }}>
            Copyright © Gerenciador de Tarefas {new Date().getFullYear()}.
        </Typography>
    )
}

export const SignInPage = () => {
    function handleSubmit(){
        console.log("/")
    }

    return (
    <Box 
        component="main"
        sx={{
            minWidth: "100vw",
            display: "flex",
            justifyContent: "center"
        }}
    >
        <Container maxWidth="xs" >
            <Box
                sx={{
                marginTop: 8,
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
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                <TextField
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
            <Copyright/>
        </Container>
    </Box>
    )
}