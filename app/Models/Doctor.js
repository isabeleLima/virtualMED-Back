'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Doctor extends Model {
    appointment () {
        return this.hasMany('App/Models/Apointment')
      }

    user () {
        return this.belongsTo('App/Models/User')
    }

}

module.exports = Doctor
