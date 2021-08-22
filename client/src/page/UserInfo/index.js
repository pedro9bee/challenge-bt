/* eslint-disable react/no-children-prop */
import React from 'react'
import {
  VStack,
  Flex,
  Box,
  Square,
  Input,
  Text,
  Container,
  FormControl,
  Button,
  Center,
  chakra,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import HeaderPage from '../../components/HeaderPage'
import { FaUserAlt } from 'react-icons/fa'

const CFaUserAlt = chakra(FaUserAlt)
// const CFaLock = chakra(FaLock)

function UserInfo() {
  const margins = ['100px', '400px', '600px', '800px']
  const textProps = {
    fontFamily: 'Roboto',
    fontSize: '12px',
    // fontSize: ['12px', '14px', '14px', '16px'],
  }
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
          <Center alignItems='initial' minH={500}>
            <Center w='100px'></Center>
            <Square bg='whiteAlpha.200' w={margins} size='150px'>
              <FormControl>
                <Box mb={20} mt={10}>
                  <Text>User Register</Text>
                </Box>
                <Flex direction='column'>
                  <Text {...textProps}>Name:</Text>
                  <InputGroup w={['200px', '200px', '400px', '200px']}>
                    <InputLeftElement
                      pointerEvents='none'
                      children={<CFaUserAlt color='gray.300' />}
                    />
                    <Input
                      id='userName'
                      placeholder='Name'
                      border={1}
                      backgroundColor='whiteAlpha.900'
                      boxShadow='md'
                    ></Input>
                  </InputGroup>
                  <Text {...textProps}>E-mail</Text>
                  <InputGroup w={['200px', '200px', '400px', '200px']}>
                    <InputLeftElement
                      pointerEvents='none'
                      children={<CFaUserAlt color='gray.300' />}
                    />
                    <Input
                      id='email'
                      placeholder='Email'
                      border={1}
                      backgroundColor='whiteAlpha.900'
                      boxShadow='md'
                    ></Input>
                  </InputGroup>
                  <Text {...textProps}>Password</Text>
                  <InputGroup w={['200px', '200px', '400px', '200px']}>
                    <InputLeftElement
                      pointerEvents='none'
                      children={<CFaUserAlt color='gray.300' />}
                    />
                    <Input
                      id='nome'
                      border={1}
                      type='password'
                      backgroundColor='whiteAlpha.900'
                      boxShadow='md'
                    ></Input>
                  </InputGroup>
                  <Text {...textProps}>Confirm Password</Text>
                  <InputGroup w={['200px', '200px', '400px', '200px']}>
                    <InputLeftElement
                      pointerEvents='none'
                      children={<CFaUserAlt color='gray.300' />}
                    />
                    <Input
                      id='confirmPassword'
                      border={1}
                      type='password'
                      backgroundColor='whiteAlpha.900'
                      boxShadow='md'
                    ></Input>
                  </InputGroup>
                  <Button
                    mt={2}
                    bg='green.400'
                    color='white'
                    w='115px'
                    _hover={{ bg: 'green.200' }}
                    _focus={{ boxShadow: 'outline' }}
                    type='submit'
                  >
                    Register User
                  </Button>
                </Flex>
              </FormControl>
            </Square>
            <Flex w='100px'></Flex>
          </Center>
        </Container>
      </Center>
    </VStack>
  )
}

export default UserInfo
