export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'tj67O==5H',
  mongodb: {
    user: process.env.MONGO_USER,
    password: process.env.MONGO_PASSWORD,
    url: process.env.MONGO_URL,
    port: process.env.MONGO_PORT,
    database: process.env.MONGO_DATABASE
  }
}