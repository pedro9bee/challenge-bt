/* eslint-disable prettier/prettier */
import React from 'react'
import { Stack, SimpleGrid} from '@chakra-ui/react'
// import { useState } from 'react'
import ProjectCard from '../ProjectCard'
// import projectList from './projectList'

function ProjectCardList({projects, deleteProject, deleteTodo}) {
  
  projects.forEach(element => {
    console.log(element._id)
  });

  return (
    <Stack ml={10}>
    <SimpleGrid columns={[1, 2, 2, 2]} spacing={10}>
          {projects.map((projects) => (
            <ProjectCard 
            deleteProject={deleteProject} 
            deleteTodo={deleteTodo} 
            project={projects} 
             key={projects._id}/>   
         ))}
    </SimpleGrid> 
    </Stack>
  )
}
export default ProjectCardList
