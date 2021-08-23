import { Request, Response } from "express";
const index = (request:Request, response:Response) =>{
  response.send('TESTE')
}
export { index}