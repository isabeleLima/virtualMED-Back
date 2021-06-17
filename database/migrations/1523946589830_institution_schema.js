'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InstitutionSchema extends Schema {
  up () {
    this.create('institutions', (table) => {
      table.increments()
      table.string('name', 60).notNullable()
      table.string('cep', 10) // like 62900-000
      table.string('address', 60) 
      table.string('contact_number', 11)
      table.timestamps()
    })
  }

  down () {
    this.drop('institutions')
  }
}

module.exports = InstitutionSchema
