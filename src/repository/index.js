'use strict'
const Repository = (Model) => {
  class RepositoryBase extends Model {
    static getOne() {
      return this.findOne()
    }
  }

  return RepositoryBase
}

module.exports = Repository
