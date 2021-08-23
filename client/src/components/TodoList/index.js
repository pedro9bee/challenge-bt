import {
  HStack,
  VStack,
  Text,
  Flex,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
} from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'

function TodoList({ projectid, todos, deleteTodo, editTodo }) {
  // const [todo, setTodo] = useState('')
  const [modalValue, setModalValue] = useState({})
  const [isOpen, setIsOpen] = useState(false)

  function onClose() {
    setIsOpen(false)
  }

  function handleEditClick(todo) {
    setIsOpen(true)
    // we've set the passed todo to modal value
    setModalValue(todo)
    console.log(todo)
  }

  function handleEditInputChange(e, id) {
    setModalValue({ ...modalValue, text: e.target.value })
    console.log(modalValue, id)
  }

  function handleEditSubmit(e) {
    e.preventDefault()

    editTodo(modalValue.id, modalValue)
    setModalValue('')
    setIsOpen(false)
  }
  console.log(todos)
  return !todos.length ? (
    <Badge colorScheme='purple' variant='outline' borderRadius='4' p='4' m='5'>
      No todos for Today!!
    </Badge>
  ) : (
    <VStack>
      {todos.map((todo, i) => (
        <HStack spacing='24px' w='320px' key={projectid + '-' + i}>
          <Flex p={6} w='300px' h='50px' justifyContent='space-between'>
            <Text color='#023e8a'>{todo.description}</Text>
            <Flex w='10px'>
              <DeleteIcon
                color='#B4C5DC'
                mr='2'
                onClick={() => deleteTodo(todo)}
              />
              <EditIcon color='#00B7D1' onClick={() => handleEditClick(todo)} />
            </Flex>
            {/* modal for editing a todo */}
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Edit Your Todo</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleEditSubmit}>
                  <ModalBody>
                    <Input
                      value={modalValue.text}
                      key={modalValue.id}
                      variant='outline'
                      type='text'
                      placeholder='Update your todo...'
                      onChange={handleEditInputChange}
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme='teal' mr={3} onClick={onClose}>
                      Close
                    </Button>
                    <Button type='submit' colorScheme='teal' mr={3}>
                      Update
                    </Button>
                  </ModalFooter>
                </form>
              </ModalContent>
            </Modal>
          </Flex>
        </HStack>
      ))}
    </VStack>
  )
}

export default TodoList
