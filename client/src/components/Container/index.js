import React from 'react'
import { Center, Container, Flex } from '@chakra-ui/react'
import HeaderPage from '../HeaderPage'
import ProjectCardList from '../ProjectCardList'
import ProjectForm from '../ProjectForm'
import axios from 'axios'
import { useEffect, useState } from 'react'

function ContainerComponent() {
  const [projects, setProjects] = useState([])
  async function projectList() {
    const listProject = await axios.get('http://localhost:5000/project/all')
    setProjects(listProject.data)
  }
  useEffect(() => {
    projectList()
  }, [])
  async function saveProject(project) {
    const projectObject = {
      userId: '6122d0142b39b5c072c11036',
      description: project.description,
    }

    axios.post('http://localhost:5000/project', projectObject).then((error) => {
      if (error) {
        console.log(error)
      }
      projectList()
    })
  }
  function deleteProject(project) {
    axios
      .delete('http://localhost:5000/project/remove/' + project._id)
      .then((error) => {
        if (error) {
          console.log(error)
        }
        projectList()
      })
  }
  function deleteTodo(project) {
    axios
      .delete('http://localhost:5000/task/remove/' + project._id)
      .then((error) => {
        if (error) {
          console.log(error)
        }
        projectList()
      })
  }
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
          <ProjectCardList
            projects={projects}
            deleteProject={deleteProject}
            deleteTodo={deleteTodo}
          />
          <ProjectForm saveProject={saveProject} />
        </Flex>
      </Container>
    </Center>
  )
}

export default ContainerComponent
