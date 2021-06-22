'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('name', 60).notNullable()
      table.string('cpf', 11).unique()
      table.integer('type_of_user').notNullable() //adm 0 doctor 1 pacient 2
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('contact_number', 11)
      table.date('birth_date')
      table.string('url_image', 254).defaultTo("/urldefaltdeumaimagem")
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
