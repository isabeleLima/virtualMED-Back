'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EspecializacaoMedicoSchema extends Schema {
  up () {
    this.create('especializacao_medicos', (table) => {
      table.increments()
     
      table.timestamps()
    })
  }

  down () {
    this.drop('especializacao_medicos')
  }
}

module.exports = EspecializacaoMedicoSchema
