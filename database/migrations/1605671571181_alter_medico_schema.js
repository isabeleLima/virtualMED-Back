'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterMedicoSchema extends Schema {
  up () {
    this.table('medicos', (table) => {
      table.integer('instituicao_id').unsigned().references('id').inTable('instituicaos')
    })
  }

  down () {
    this.table('medicos', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AlterMedicoSchema
