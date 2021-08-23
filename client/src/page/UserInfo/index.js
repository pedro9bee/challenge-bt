/* eslint-disable react/no-children-prop */
import React from 'react'
import {
  VStack,
  // Flex,
  // Box,
  // Square,
  // Input,
  // Text,
  Container,
  // FormControl,
  // Button,
  Center,
  // chakra,
  // InputGroup,
  // InputLeftElement,
} from '@chakra-ui/react'
import HeaderPage from '../../components/HeaderPage'
// import { FaUserAlt } from 'react-icons/fa'

// const CFaUserAlt = chakra(FaUserAlt)
// const CFaLock = chakra(FaLock)

function UserInfo() {
  // const margins = ['100px', '400px', '600px', '800px']
  // const textProps = {
  //   fontFamily: 'Roboto',
  //   fontSize: '12px',
  //   // fontSize: ['12px', '14px', '14px', '16px'],
  // }
  return (
    <VStack id='page-UserInfo'>
      <Center id='Center-Object'>
        <Container
          w={['600px', '800px', '1200px', '1400px']}
          maxW='container.xl'
          borderWidth='1px'
          rounded='lg'
          p={0}
          shadow='1px 1px 3px rgba(0,0,0,0.3)'
          id='Container-Stack'
        >
          <HeaderPage />
        </Container>
      </Center>
    </VStack>
  )
}

export default UserInfo
