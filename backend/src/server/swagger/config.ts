// import paths from './paths'
// import components from './components/index'
export default {
  openapi: '3.0.0',
  info: {
    title: 'BoltTech Challenge',
    description: 'API for todo application',
    version: '1.0.0',
    contact: {
      name: 'Pedro Lemos',
      email: 'pedro9bee@gmail.com',
      url: 'https://www.linkedin.com/in/pedro9bee'
    }
  },
  servers: [{
    url: '/api',
    description: 'Servidor Principal'
  }],
  tags: [{
    name: 'Login',
    description: 'APIs relacionadas a Login'
  }, {
    name: 'Projects',
    description: 'APIs relacionadas a Projects'
  }],
  // paths, 
  // components
}
