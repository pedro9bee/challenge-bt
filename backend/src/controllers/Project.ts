import { Request, Response } from "express"

import ProjectClass from '../useCases/Project'
const create = async (request:Request, response:Response) =>{
  try {
    const project = new ProjectClass();
    project.factory(request.body)
    project.save()
    return response.json(project).status(201)
  } catch (error) {
    return response.status(500).json({ error });
 }
}
const read = async (request:Request, response:Response) =>{
  const project = new ProjectClass()
  return response.json(await project.read(request.params.id)).status(400)
 }
 const readAll = async (request:Request, response:Response) =>{
  const project = new ProjectClass()
  return response.json(await project.readAll()).status(400)
 }
const update = async (request:Request, response:Response) =>{
  const project = new ProjectClass()
  const result = await project.update(request.params.id, request.body)
  if(result===null){
    return response.json({status:'NOT_UPDATED'}).status(400)
  }
  else{
    return response.json(result).status(200)
  }
}
const del = async (request:Request, response:Response) =>{
  const project = new ProjectClass()
  const result = await project.delete(request.params.id)
  if(result===null){
    return response.json({status:'NOT_DELETED'}).status(400)
  }
  else{
    return response.json(result).status(200)
  }
}
const remove = async (request:Request, response:Response) =>{
  const project = new ProjectClass()
  console.log('remove')
  const result = await project.remove(request.params.id)
  if(result===null){
    return response.json({status:'NOT_REMOVED'}).status(400)
  } 
  else{
    return response.json(result).status(200)
  }
}
export { 
  create,
  read,
  readAll,
  update,
  del, 
  remove
}  