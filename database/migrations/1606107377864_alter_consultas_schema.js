'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterConsultasSchema extends Schema {
  up () {
    this.table('consultas', (table) => {
      table.integer('medico_user_id').unsigned().references('user_id').inTable('medicos').onDelete('cascade').onUpdate('cascade');
      table.integer('paciente_user_id').unsigned().references('user_id').inTable('pacientes').onDelete('cascade').onUpdate('cascade')
    })
  }

  down () {
    this.table('alter_consultas', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AlterConsultasSchema
