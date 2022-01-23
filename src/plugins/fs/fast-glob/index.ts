'use strict'
import fg from 'fast-glob'

import IRouteConfig from '../../../Interfaces/RouteConfig'

export async function getAllFilesBySimilarPath(
  path: string
): Promise<string[]> {
  const files = await fg([path], { dot: true })

  return files
}
