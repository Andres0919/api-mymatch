'use strict'
const swaggerUi = require('swagger-ui-express')
const { stream } = require('fast-glob')

const { executeRoute } = require('../utils/executeRoute')

const swaggerDoc = require('./swagger.json')
const globalPrefix = '/api'
const api = async (app) => {
  const files = stream(['src/api/**/network.js'], { dot: true })
  for await (const file of files) {
    const fileName = file.replace('src/api', '.')
    const routeConfig = require(`${fileName}`)

    if (!routeConfig.routes || !routeConfig.moduleName) {
      continue
    }

    for (const route of routeConfig.routes) {
      const routeMethod = route.method || 'get'
      const routeFullPath = `${globalPrefix}/${routeConfig.moduleName}${route.path}`
      app[routeMethod](routeFullPath, (req, res) =>
        executeRoute(req, res, route.options)
      )
    }
  }

  app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
}

module.exports = api
