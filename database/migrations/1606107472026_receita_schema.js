'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReceitaSchema extends Schema {
  up () {
    this.create('receitas', (table) => {
      table.increments()
      table.integer('consulta_id').unsigned().references('id').inTable('consultas').onDelete('cascade').onUpdate('cascade')
      table.string('receita', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('receitas')
  }
}

module.exports = ReceitaSchema
