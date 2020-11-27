'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PacienteSchema extends Schema {
  up () {
    this.create('pacientes', (table) => {
      table.increments()
      table.string('sangue', 3).notNullable().unique()
      table.string('peso', 80).notNullable()
      table.string('altura', 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('pacientes')
  }
}

module.exports = PacienteSchema
