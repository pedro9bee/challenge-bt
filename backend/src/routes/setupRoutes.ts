import home from './home'
import user from './user'
import project from './project'
import task from './task'
import express from 'express'
import { Express, Router } from 'express'
import cors from 'cors'

export default (app: Express): void => {
  const router = Router()
  app.use(express.json())
  app.use(cors({
    origin: ['http://localhost:5000']  
  }))
  app.use('/',  home)
  app.use('/user',  user)
  app.use('/project',  project)
  app.use('/task',  task)

}
