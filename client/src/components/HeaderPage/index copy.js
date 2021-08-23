import React from 'react'
import {
  Box,
  Flex,
  Text,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
} from '@chakra-ui/react'
import { BrowserRouter, Link } from 'react-router-dom'
import './style.css'

export default function Simple() {
  function OldSchoolMenuLink(props) {
    const { label, to } = props

    return <Link to={to}>{label}</Link>
  }
  const NavBar = () => (
    <>
      <Menu>
        <MenuButton
          as={Text}
          rounded={'full'}
          variant={'link'}
          cursor={'pointer'}
          minW={0}
        >
          Pedro Lemos
        </MenuButton>
        <MenuList bg='#E7E5E6'>
          <BrowserRouter>
            <MenuItem>
              <OldSchoolMenuLink label='User Info' to='/userinfo' key={1} />
            </MenuItem>
            <MenuDivider />
            <MenuItem>
              <OldSchoolMenuLink label='Login' to='/login' key={2} />
            </MenuItem>
            <MenuDivider />
            <MenuItem></MenuItem>
          </BrowserRouter>
        </MenuList>
      </Menu>
    </>
  )
  return (
    <Box border='1' className='menuTop'>
      <VStack className='menuInner'>
        <Flex bg='#dee2e6' w='100%' p={4}>
          <Flex flex={{ base: 1, md: 'auto' }} w={'70%'}>
            <Link to='/'>TEST</Link>
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
            <NavBar />
          </Stack>
        </Flex>
      </VStack>
    </Box>
  )
}
