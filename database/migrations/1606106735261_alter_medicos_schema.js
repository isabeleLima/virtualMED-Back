'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterMedicosSchema extends Schema {
  up () {
    this.table('medicos', (table) => {
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade').onUpdate('cascade')
      table.integer('instituicaoid_id').unsigned().references('id').inTable('instituicaos').onDelete('cascade').onUpdate('cascade')
    })
  }

  down () {
    this.table('alter_medicos', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AlterMedicosSchema
