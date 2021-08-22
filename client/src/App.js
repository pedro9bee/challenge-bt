import React from 'react'
import { Center, VStack } from '@chakra-ui/react'
import './App.css'
// import { useState } from 'react'
// import Container from './components/Container'
import ProjectPage from './page/Project'
import UserInfo from './page/UserInfo'
import Login from './page/Login'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Center w='100%'>
      <VStack id='app-VSTACK'>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={ProjectPage} exact />
            <Route path='/login' component={Login} exact />
            <Route path='/userinfo' component={UserInfo} exact />
          </Switch>
        </BrowserRouter>
      </VStack>
    </Center>
  )
}

export default App
