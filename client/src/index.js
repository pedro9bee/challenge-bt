import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
// import { extendTheme } from '@chakra-ui/react'
import customTheme from './theme/theme'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
