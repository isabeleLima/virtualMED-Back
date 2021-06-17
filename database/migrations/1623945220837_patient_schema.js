'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PatientSchema extends Schema {
  up () {
    this.create('patients', (table) => {
      table.increments()
      table.string('blood_type', 3) // A B AB O ( + OR - )
      table.integer('weight') // IN GM
      table.integer('height') // IN CM

      table.integer('user_id').unsigned().references('id').inTable('users')
        .onDelete('cascade').onUpdate('cascade')

      table.timestamps()
    })
  }

  down () {
    this.drop('patients')
  }
}

module.exports = PatientSchema
