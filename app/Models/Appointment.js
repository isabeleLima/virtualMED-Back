'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Appointment extends Model {
    prescription () {
        return this.hasOne('App/Models/Prescription')
    }
}

module.exports = Appointment
