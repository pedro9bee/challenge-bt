import React from 'react'
// import { Center, VStack } from '@chakra-ui/react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from './theme/theme'
import ProjectPage from './page/Project'
import UserInfo from './page/UserInfo'
import Login from './page/Login'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={customTheme}>
        {/* <Center w='100%'>
          <VStack id='app-VSTACK'> */}
        <Switch>
          <Route path='/' component={ProjectPage} exact />
          <Route path='/login' component={Login} exact />
          <Route path='/userinfo' component={UserInfo} exact />
        </Switch>
        {/* </VStack>
        </Center> */}
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
