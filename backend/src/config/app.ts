import setupMiddlewares from '../server/middlewares'
import setupRoutes from '../routes/setupRoutes'
// import setupSwagger from '@/server/swagger'

import express from 'express'

const app = express()
//  setupSwagger(app)
setupMiddlewares(app)
 setupRoutes(app)
export default app