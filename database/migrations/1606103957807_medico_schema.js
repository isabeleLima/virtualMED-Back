'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MedicoSchema extends Schema {
  up () {
    this.create('medicos', (table) => {
      table.increments()
      table.string('corem', 11).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('medicos')
  }
}

module.exports = MedicoSchema
