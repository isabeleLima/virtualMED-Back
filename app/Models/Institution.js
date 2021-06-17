'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Institution extends Model {
    doctor () {
        return this.hasMany('App/Models/Doctor')
      }
}

module.exports = Institution
