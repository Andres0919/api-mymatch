'use strict'
const Repository = (Model) => {
  class RepositoryBase extends Model {}

  RepositoryBase.list = function () {
    return Model.findAll()
  }

  RepositoryBase.create = function (model) {
    return Model.create(model)
  }

  return RepositoryBase
}

module.exports = Repository
