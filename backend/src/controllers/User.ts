import { Request, Response } from "express"
import bcrypt from 'bcryptjs'
import UserClass from '../useCases/User'
const create = async (request:Request, response:Response) =>{
  try {
    const user = new UserClass();
    request.body["password"] = bcrypt.hashSync(request.body["password"], 10);
    user.factory(request.body)
    const result = await user.save()
    console.log(result)
    if(result=='SUCCESS'){
      return response.json(user).status(201)
    }
    return response.json(result).status(400)
  } catch (error) {
    return response.status(500).json({ error });
 }
}
const read = async (request:Request, response:Response) =>{
  const user = new UserClass()
  return response.json(await user.read(request.params.id)).status(400)
 }
 const readAll = async (request:Request, response:Response) =>{
  const user = new UserClass()
  return response.json(await user.readAll()).status(400)
 }
const update = async (request:Request, response:Response) =>{
  const user = new UserClass()
  const result = await user.update(request.params.id, request.body)
  if(result===null){
    return response.json({status:'NOT_UPDATED'}).status(400)
  }
  else{
    return response.json(result).status(200)
  }
}
const del = async (request:Request, response:Response) =>{
  const user = new UserClass()
  const result = await user.delete(request.params.id)
  if(result===null){
    return response.json({status:'NOT_DELETED'}).status(400)
  }
  else{
    return response.json(result).status(200)
  }
}
const remove = async (request:Request, response:Response) =>{
  const user = new UserClass()
  console.log('remove')
  const result = await user.remove(request.params.id)
  if(result===null){
    return response.json({status:'NOT_REMOVED'}).status(400)
  } 
  else{
    return response.json(result).status(200)
  }
}
const authenticate = async (request:Request, response:Response) =>{
  return response.json('login').status(400)
}  
export { 
  create,
  read,
  readAll,
  update,
  del, 
  authenticate,  
  remove
}  