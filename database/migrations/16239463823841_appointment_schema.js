'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AppointmentSchema extends Schema {
  up () {
    this.create('appointments', (table) => {
      table.increments()
      table.string('status').notNullable().defaultTo('pending') //pending //accept //cancel //finished //lost 
      table.datetime('date_start')
      table.datetime('date_end')
      table.string('reason', 255)

      table.integer('doctor_id').unsigned().references('user_id').inTable('doctors')
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
