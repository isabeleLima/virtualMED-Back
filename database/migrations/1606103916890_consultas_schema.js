'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConsultasSchema extends Schema {
  up () {
    this.create('consultas', (table) => {
      table.increments()
      table.datetime('dia', { precision: 6 })
      table.timestamps()
    })
  }

  down () {
    this.drop('consultas')
  }
}

module.exports = ConsultasSchema
