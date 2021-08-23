import React from 'react'
import { Box, Flex, VStack, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import './style.css'

export default function Simple() {
  return (
    <Box border='1' className='menuTop'>
      <VStack className='menuInner'>
        <Flex bg='#dee2e6' w='100%' p={4}>
          <Flex flex={{ base: 1, md: 'auto' }} w={'20%'}>
            <Box ml={2}>EDirect Insure TODO List</Box>
          </Flex>
          <Stack
            id='projectAction'
            w={'30%'}
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
          >
            <Link to='/userinfo'>User Info</Link>
            <Link to='/login'>Login</Link>
            <Link to='/'>Projects</Link>
          </Stack>
        </Flex>
      </VStack>
    </Box>
  )
}
