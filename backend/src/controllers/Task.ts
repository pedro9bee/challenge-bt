import { request, Request, Response } from "express";
import TaskClass from '../useCases/Task'

const create = async (request:Request, response:Response) =>{
  try {
    const task = new TaskClass();
    request.body.projectId = request.params.idProject
    await task.factory(request.body)
    const result = await task.save()
    if(result=='SUCCESS'){
      return response.json(task).status(201)
    }
    return response.json(result).status(400)
  } catch (error) {
    console.log(error)
    return response.status(500).json({ 
      error : JSON.stringify(error) 
    });
 }
}
const read = async (request:Request, response:Response) =>{
  const {id} = request.params 
  const project = new TaskClass()
  return response.json(await project.read(id)).status(200)
 }
 const readAll = async (request:Request, response:Response) =>{
  const project = new TaskClass()
  return response.json(await project.readAll(request.params.idProject)).status(200)
  }
const update = async (request:Request, response:Response) =>{
  return response.json('update').status(400)
}
const del = async (request:Request, response:Response) =>{
  const task = new TaskClass()
  const result = await task.delete(request.params.id)
  if(result===null){
    return response.json({status:'NOT_DELETED'}).status(400)
  }
  else{
    return response.json(result).status(200)
  }
}
const remove = async (request:Request, response:Response) =>{
  const task = new TaskClass()
  const result = await task.remove(request.params.id)
  return response.json(result).status(200)
}
export { 
  create,
  read,
  readAll,
  update,
  remove,
  del
}  