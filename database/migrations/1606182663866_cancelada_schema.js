'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CanceladaSchema extends Schema {
  up () {
    this.create('canceladas', (table) => {
      table.increments()
      table.integer('consulta_id').unsigned().references('id').inTable('consultas').onDelete('cascade').onUpdate('cascade')
      table.string('motivo', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('canceladas')
  }
}

module.exports = CanceladaSchema
