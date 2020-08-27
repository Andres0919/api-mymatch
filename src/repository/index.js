'use strict'
const Repository = (Model) => {
  const RepositoryBase = Object.create(Model)
  RepositoryBase.getOne = function () {
    return Model.findOne()
  }

  return RepositoryBase
}

module.exports = Repository
