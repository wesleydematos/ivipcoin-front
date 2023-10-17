import {CircularProgress, Typography, Box} from "@mui/material"

export const Loading = () => {
    return (
        <Box sx={{ minHeight: "100vh", minWidth: "100vw", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "15px"}}>
            <Typography>Carregando...</Typography>
            <CircularProgress/>
        </Box>
    )
}