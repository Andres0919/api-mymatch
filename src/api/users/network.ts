'use strict'
import RouteConfig from '../../Interfaces/RouteConfig'
import { list, create } from './controller'
import { addUser, replyUser } from './schema'

const routeConfig: RouteConfig = {
  moduleName: 'users',
  routes: [
    {
      method: 'get',
      path: '/',
      options: {
        handler: list,
        message: 'todo asds',
        replySchema: replyUser,
      },
    },
    {
      method: 'post',
      path: '/',
      options: {
        schema: {
          body: {
            required: true,
            items: addUser,
          },
        },
        handler: create,
        replySchema: replyUser,
        message: '¡Usuario creado con éxito!',
        status: 201,
      },
    },
  ],
}

export default routeConfig
