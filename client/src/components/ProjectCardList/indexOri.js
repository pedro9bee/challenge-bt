/* eslint-disable prettier/prettier */
import React from 'react'
import { Stack, SimpleGrid  } from '@chakra-ui/react'
import axios from 'axios'
// import { useState } from 'react'
import ProjectCard from '../ProjectCard'
// import projectList from './projectList'
import { useMediaQuery} from '@chakra-ui/media-query'
async function projectList(){
  const listProject = await axios
  .get('http://localhost:5000/project/all')
  return listProject.data 
}
async function ProjectCardList() {
  const projects = await projectList()
  console.log('***************')
  console.log(projects)
  //const [projects, setProjectList] = useState(projectList)
  // console.log(setProjectList)
  const [isNotSmallerScreen] = useMediaQuery("(min-width:1200px)")
  console.log(isNotSmallerScreen);
  return (
    <Stack ml={10}>
    <SimpleGrid columns={[1, 2, 2, 2]} spacing={10}>
          {projects.map((projects, i) => (
            <>
          <ProjectCard project={projects}  key={i}/>   
         </>
         ))}
    </SimpleGrid>
    </Stack>
  )
}
export default ProjectCardList
