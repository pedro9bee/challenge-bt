import {
  Box,
  Flex,
  VStack,
  Text,
  Input,
  Button,
  useToast,
  Spacer,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import './style.css'
import theme from '../../theme/theme'

function AddProject({ addProject }) {
  const toast = useToast()
  const [value, setValue] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (value === '') {
      toast({
        title: 'Please enter the text.',
        status: 'warning',
        duration: 2000,
        isClosable: true,
      })
      return
    }
    const project = {
      id: nanoid(),
      text: value,
    }

    addProject(project)
    setValue('')
  }
  console.log(theme.fontSizes['6xl'])
  return (
    <form onSubmit={handleSubmit}>
      <Box
        alignSelf='flex-start'
        ml={[10, 20, 10, 10]}
        border='1'
        className='projectSet'
        w={[220, 400, 260, 300]}
      >
        <VStack className='projectBox' borderRadius='0'>
          <Flex align='center' direction='column' bg='#dee2e6' w='100%' p={4}>
            <Text
              mt={5}
              mb={2}
              fontFamily={theme.fonts.subtitle}
              fontSize={[
                theme.fontSizes['md'],
                theme.fontSizes['md'],
                theme.fontSizes['md'],
                '1.2rem',
              ]}
            >
              Create a new Project
            </Text>
            <Input
              value={value}
              bg={'white'}
              variant='outline'
              type='text'
              w={['115px', '250px', '115px', '200px']}
              mb={3}
              placeholder='Project Name'
              onChange={(e) => setValue(e.target.value)}
            />
            <Button
              bg='#00B7D1'
              color='white'
              w={['115px', '250px', '115px', '200px']}
              mb={3}
              _hover={{ bg: 'green.200' }}
              _focus={{ boxShadow: 'outline' }}
              type='submit'
            >
              Create Project
            </Button>
            <Spacer />
          </Flex>
        </VStack>
      </Box>
    </form>
  )
}

export default AddProject
