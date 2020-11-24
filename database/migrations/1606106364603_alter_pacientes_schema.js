'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterPacientesSchema extends Schema {
  up () {
    this.table('pacientes', (table) => {
      table.increments();
      table.timestamps()
    })
  }

  down () {
    this.table('alter_pacientes', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AlterPacientesSchema
