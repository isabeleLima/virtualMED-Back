'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterEspecializacaoMedicosSchema extends Schema {
  up () {
    this.table('especializacao_medicos', (table) => {
      table.integer('especializacao_id').unsigned().references('id').inTable('especializacaos').onDelete('cascade').onUpdate('cascade')
      table.integer('medico_user_id').unsigned().references('user_id').inTable('medicos').onDelete('cascade').onUpdate('cascade')
    })
  }

  down () {
    this.table('alter_especializacao_medicos', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AlterEspecializacaoMedicosSchema
