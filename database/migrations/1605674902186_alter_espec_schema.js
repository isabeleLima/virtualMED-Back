'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterEspecSchema extends Schema {
  up () {
    this.table('especializacaos', (table) => {
      table.string('nome', 80).notNullable()
    })
  }
  down () {
    this.table('alter_especs', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AlterEspecSchema
