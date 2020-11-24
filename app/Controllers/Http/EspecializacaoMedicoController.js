'use strict'

const Medico = use('App/Models/Medico');
const Especializacao = use('App/Models/Especializacao');
const EspecializacaoMedico = use('App/Models/EspecializacaoMedico');


class EspecializacaoMedicoController {
  
  async store({ request, response, view}) {
    const data = request.only(['especializacao_id','medico_user_id']);
    const especializacaoMedico = await EspecializacaoMedico.create(data);
    return especializacaoMedico;

  }

  async show ({ params, request, response, view, auth }) {    
    const user = await auth.getUser()
    const especializacaoMedico = await EspecializacaoMedico.query().where('medico_user_id', '=', `${user.id}`).fetch()

    let nomeEspecializacao = [] ;

    for(let i=0; i<especializacaoMedico.rows.length; i++){

      const id = especializacaoMedico.rows[i].especializacao_id
      const aux = await  Especializacao.query().select('nome').where('id', '=', `${id}`).fetch()
      nomeEspecializacao.push(aux.rows[0])

    }
    return nomeEspecializacao
  }

}


module.exports = EspecializacaoMedicoController
