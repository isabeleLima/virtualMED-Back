'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PrescriptionSchema extends Schema {
  up () {
    this.create('prescriptions', (table) => {
      table.increments()
      table.string('receita', 60).notNullable()
      table.text('prescriptions', 'mediumtex')

      table.integer('appointment_id').unsigned().references('id').inTable('appointments')
        .onDelete('cascade').onUpdate('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('prescriptions')
  }
}

module.exports = PrescriptionSchema
