'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DoctorSchema extends Schema {
  up () {
    this.create('doctors', (table) => {
      table.increments()
      table.string('corem', 11).notNullable()
      table.string('residency', 60).notNullable()
      table.boolean('is_activated').default(0)
      table.integer('user_id').unsigned().references('id').inTable('users')
        .onDelete('cascade').onUpdate('cascade')
      table.integer('institution_id').unsigned().references('id').inTable('institutions')
        .onDelete('cascade').onUpdate('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('doctors')
  }
}

module.exports = DoctorSchema
