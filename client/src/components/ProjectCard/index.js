import React from 'react'
import { VStack, Text, Flex, Stack, Box } from '@chakra-ui/react'
import { useState } from 'react'
import AddTodo from '../AddTodo'
import TodoList from '../TodoList'
import { DeleteIcon } from '@chakra-ui/icons'
import { PencilIcon } from './pencilIcon'

import './style.css'
function ProjectCard(props) {
  const { project } = props
  const todosList = project.tasks

  const [todos, setTodos] = useState(todosList)

  function handleEditClick(project) {
    console.log(project)
  }

  function deleteTodo(id) {
    const newTodos = todos.filter((item) => {
      return item.id !== id
    })
    setTodos(newTodos)
    console.log(newTodos)
  }

  function addTodo(newTodo) {
    setTodos([...todos, newTodo])
  }

  function editTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo
    })
    setTodos(updatedItem)
  }

  return (
    <VStack>
      <Box border='1' className='projectSet'>
        <VStack className='projectBox'>
          <Flex bg='#dee2e6' w='100%' p={4}>
            <Flex flex={{ base: 1, md: 'auto' }} w={'70%'}>
              <Text className='projectTitle'>{project.nameproject}</Text>
            </Flex>
            <Stack
              id='projectAction'
              w={'30%'}
              flex={{ base: 1, md: 0 }}
              justify={'flex-end'}
              direction={'row'}
              spacing={6}
            >
              <PencilIcon
                color='#B4C5DC'
                onClick={() => handleEditClick(project)}
              />
              <DeleteIcon
                color='#B4C5DC'
                mr='2'
                onClick={() => deleteTodo(project.id)}
              />
            </Stack>
          </Flex>
          <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
          <AddTodo addTodo={addTodo} />
        </VStack>
      </Box>
    </VStack>
  )
}

export default ProjectCard
