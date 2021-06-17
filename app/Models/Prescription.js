'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Prescription extends Model {
    appointment () {
        return this.belongsTo('App/Models/Appointment')
    }
}

module.exports = Prescription
