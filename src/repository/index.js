'use strict'
const Repository = (Model) => {
  class RepositoryBase extends Model {}

  RepositoryBase.getOne = function () {
    return Model.findOne()
  }

  return RepositoryBase
}

module.exports = Repository
