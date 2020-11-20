'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Instituicao extends Model {
    medico () {
        return this.hasOne('App/Models/Medico')
        
      }
}

module.exports = Instituicao
