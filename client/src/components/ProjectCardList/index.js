/* eslint-disable prettier/prettier */
import React from 'react'
import { Stack, SimpleGrid  } from '@chakra-ui/react'
// import { useState } from 'react'
import ProjectCard from '../ProjectCard'
import projectList from './projectList'
import { useMediaQuery} from '@chakra-ui/media-query'

function ProjectCardList() {
  const projects = projectList()
  //const [projects, setProjectList] = useState(projectList)
  // console.log(setProjectList)
  const [isNotSmallerScreen] = useMediaQuery("(min-width:1200px)")
  console.log(isNotSmallerScreen);
  return (
    <Stack ml={10}>
    <SimpleGrid columns={[1, 2, 2, 2]} spacing={10}>
          {projects.map((projects, i) => (
            <>
          <ProjectCard project={projects}  key={'pc-'+ i}/>   
         </>
         ))}
    </SimpleGrid>
    </Stack>
  )
}
export default ProjectCardList
