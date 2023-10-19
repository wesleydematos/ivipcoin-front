import {createTheme} from "@mui/material/styles"
import {red, green} from "@mui/material/colors"

const theme = createTheme({
  components: {
    MuiInputBase: {
      defaultProps: {
      inputProps: {
        style: {color: "#fff"}
      }
      }
    },
    MuiInputLabel: {
      defaultProps: {
        style: {color: "#fff"}
      }
    }
  },
  palette: {
    primary: {
      main: "#ff8f00"
    },
    secondary: {
      main: "#ffa026"
    },
    error: {
      main: red[500]
    },
    success: {
      main: green[500]
    },
    background: {
      default: "#212121"
    },
    text: {
      primary: "#f2f2f2",
      secondary: "#343434"
    }
  }
})

export {theme}