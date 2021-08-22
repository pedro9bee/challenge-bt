import React from 'react'
import { Center, Container, Flex } from '@chakra-ui/react'
import HeaderPage from '../HeaderPage'
import ProjectCardList from '../ProjectCardList'
import ProjectForm from '../ProjectForm'
// import { useMediaQuery } from '@chakra-ui/media-query'

function ContainerComponent() {
  // const [isNotSmallerScreen] = useMediaQuery('(min-width:1200px)')
  return (
    // <Center w={isNotSmallerScreen ? '1400px' : '600'} id='Center-Object'>
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
          alignSelf='self-end'
          direction={['column-reverse', 'column-reverse', 'row', 'row']}
        >
          <ProjectCardList />
          <ProjectForm />
        </Flex>
      </Container>
    </Center>
  )
}

export default ContainerComponent
