import mongoose   from 'mongoose'
import config from '../../config/env'
// import connectionArgs from './connectionParameters'
type  IdatabaseOption = {
        poolSize: number,
        useNewUrlParser: boolean,
        useFindAndModify: boolean,
        useCreateIndex: boolean,
        useUnifiedTopology: boolean,
        authSource: string,
        dbName: string
}
export const MongoHelper = {
    client:null,
    database: `mongodb://${config.mongodb.user}:${config.mongodb.password}@${config.mongodb.url}:${config.mongodb.port}`,
    databaseOption: { 
         poolSize: 10,
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
        authSource: 'admin',
        dbName: `${config.mongodb.database}`
    },

  async  connect (uri: string): Promise<void> {
    let connectionArgs = {
      url:'mongodb://localhost:27017/bolttech', 
      parameters:{useNewUrlParser: true}
    }
    
      mongoose.connect(connectionArgs.url, connectionArgs.parameters).then(() => {
        // console.log(mongoose.connection)
          console.log('connected to mongodb')
      }).catch(err => {
          console.log('Error: ' + err)
      })
   
  },

  async disconnect (): Promise<void> {
    console.log('disconnected')
  },

  async getCollection (name: string): Promise<mongoose.Schema> {
    return await import(`../../models/${name}`)
  },

  map: (data: any): any => {
    const { _id, ...rest } = data
    return { ...rest, id: _id }
  },

  mapCollection: (collection: any[]): any[] => {
    return collection.map(c => MongoHelper.map(c))
  }
}
