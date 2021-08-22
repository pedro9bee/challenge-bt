import { HStack, Input, Button, useToast, Spacer } from '@chakra-ui/react'
import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import './style.css'
function AddTodo({ addTodo }) {
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
    const todo = {
      id: nanoid(),
      text: value,
    }

    addTodo(todo)
    setValue('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <HStack spacing={5} mb={4} alignItems='center'>
        <Input
          value={value}
          variant='outline'
          type='text'
          w={130}
          placeholder='Task.'
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          bg='green.400'
          color='white'
          w='115px'
          _hover={{ bg: 'green.200' }}
          _focus={{ boxShadow: 'outline' }}
          type='submit'
        >
          Add
        </Button>
        <Spacer />
      </HStack>
    </form>
  )
}

export default AddTodo
