'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterConsultaSchema extends Schema {
  up () {
    this.table(' consultas', (table) => {
      table.string('status', 60).notNullable().defaultTo('em espera')
    })
  }

  down () {
    this.table('alter_consultas', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AlterConsultaSchema
