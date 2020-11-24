'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EspecializacaoSchema extends Schema {
  up () {
    this.create('especializacaos', (table) => {
      table.increments()
      table.string('nome', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('especializacaos')
  }
}

module.exports = EspecializacaoSchema
