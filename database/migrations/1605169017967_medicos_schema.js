'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MedicosSchema extends Schema {
  up () {
    this.create('medicos', (table) => {
      table.increments()
      table.string('corem', 11).notNullable().unique()
      table.string('especializacao', 80).notNullable()
      table.string('instituicao', 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('medicos')
  }
}

module.exports = MedicosSchema
