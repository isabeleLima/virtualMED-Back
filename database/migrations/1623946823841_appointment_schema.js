'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AppointmentSchema extends Schema {
  up () {
    this.create('appointments', (table) => {
      table.increments()

      table.datetime('date')
      table.string('status').notNullable() //ON HOLD //ACCEPT //DENIED //COMPLETED //LOST 
 

      table.integer('doctor_id').unsigned().references('id').inTable('doctors')
      .onDelete('cascade').onUpdate('cascade');
      table.integer('patient_id').unsigned().references('user_id')
      .inTable('patients').onDelete('cascade').onUpdate('cascade')

      table.timestamps()
    })
  }

  down () {
    this.drop('appointments')
  }
}

module.exports = AppointmentSchema
