/* eslint-disable react/no-children-prop */
import React from 'react'
import {
  Flex,
  Button,
  Box,
  Stack,
  VStack,
  Avatar,
  Heading,
  FormControl,
  Container,
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  Center,
  chakra,
} from '@chakra-ui/react'
import { useState } from 'react'
import HeaderPage from '../../components/HeaderPage'
import { FaUserAlt, FaLock } from 'react-icons/fa'

const CFaUserAlt = chakra(FaUserAlt)
const CFaLock = chakra(FaLock)
function Login() {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowClick = () => setShowPassword(!showPassword)

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Você clicou em enviar.')
  }
  return (
    <VStack id='page-Login'>
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
          <Flex
            flexDirection='column'
            width='100wh'
            height='100vh'
            justifyContent='center'
            alignItems='center'
          >
            <Stack
              flexDir='column'
              mb='2'
              justifyContent='center'
              alignItems='center'
            >
              <Avatar bg='gray.500' />
              <Heading color='gray.400'>Welcome</Heading>
              <Box minW={{ base: '90%', md: '468px' }}>
                <form onSubmit={handleSubmit}>
                  <Stack
                    spacing={4}
                    p='1rem'
                    backgroundColor='whiteAlpha.900'
                    boxShadow='md'
                  >
                    <FormControl>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents='none'
                          children={<CFaUserAlt color='gray.300' />}
                        />
                        <Input type='email' placeholder='email address' />
                      </InputGroup>
                    </FormControl>
                    <FormControl>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents='none'
                          color='gray.300'
                          children={<CFaLock color='gray.300' />}
                        />
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          placeholder='Password'
                        />
                        <InputRightElement width='4.5rem'>
                          <Button
                            h='1.75rem'
                            size='sm'
                            onClick={handleShowClick}
                          >
                            {showPassword ? 'Hide' : 'Show'}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                    <Button
                      borderRadius={0}
                      type='submit'
                      variant='solid'
                      colorScheme='blue'
                      width='full'
                    >
                      Login
                    </Button>
                  </Stack>
                </form>
              </Box>
            </Stack>
          </Flex>
        </Container>
      </Center>
    </VStack>
  )
}

export default Login
