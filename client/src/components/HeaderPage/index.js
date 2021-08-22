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
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

export default function Simple() {
  const userInfoClick = () => {
    console.log('UserInfo')
  }
  function OldSchoolMenuLink(props) {
    const { label, to } = props

    return <Link to={to}>{label}</Link>
  }
  const NavBar = () => (
    <Menu>
      <MenuButton
        as={Text}
        rounded={'full'}
        variant={'link'}
        cursor={'pointer'}
        minW={0}
      >
        <Text color='#60626F' mr={3}>
          Pedro Lemos
        </Text>
      </MenuButton>
      <MenuList bg='#E7E5E6'>
        <BrowserRouter>
          <MenuItem onClick={userInfoClick}>
            <OldSchoolMenuLink label='User Info' to='/userinfo' />
          </MenuItem>
          <MenuDivider />
          <MenuItem>
            <OldSchoolMenuLink label='Login' to='/login' />
          </MenuItem>
        </BrowserRouter>
      </MenuList>
    </Menu>
  )
  return (
    <Box border='1' className='menuTop'>
      <VStack className='menuInner'>
        <Flex bg='#dee2e6' w='100%' p={4}>
          <Flex flex={{ base: 1, md: 'auto' }} w={'70%'}>
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
