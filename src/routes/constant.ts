export const routeConstants = {
  HEALTH: '',
  SWAGGER_ROUTE: '',
}

export const SWAGGER_OPTIONS = {
  swaggerDefinition: {
    info: {
      title: 'Spotter API documentation',
      description: 'documentation for spotter api',
      version: '1.0.0',
    },
    host: 'localhost:3000', // TODO add from env files
    produces: ['application/json'],
    schemes: ['http', 'https'],
  },
  apis: ['**/*.ts'],
}
