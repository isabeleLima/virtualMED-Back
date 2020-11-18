'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterUserSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.string('path', 254)
    })
  }

  down () {
    this.table('alter_users', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AlterUserSchema
