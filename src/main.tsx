import ReactDOM from 'react-dom/client'
import React from 'react'

import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

import App from './App.tsx'
import './index.css'

import {ThemeProvider} from '@emotion/react'
import {CssBaseline} from "@mui/material"
import {theme} from './styles/theme.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ToastContainer autoClose={2000} theme="dark" />
      <CssBaseline/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
