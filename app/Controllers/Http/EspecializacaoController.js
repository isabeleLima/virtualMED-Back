'use strict'

const Especializacao = use('App/Models/Especializacao');

class EspecializacaoController {
   async index({ request, response, view }) {
    const especializacao = await Especializacao.all();
    return especializacao;
  }

  async store({ request, response, view}) {
    const data = request.only(['nome']);
    const especializacao = await Especializacao.create(data);
    return especializacao;

  }

  async update({ params, request, response }) {
    const especializacao = await Especializacao.findOrFail(params.id);
    const data = request.only(['nome']);
    
    Especializacao.merge(data);
    await especializacao.save();
    
    return especializacao
  }

  async destroy({ params, request, response }) {
    const especializacao = await Especializacao.findOrFail(params.id);
    await especializacao.delete();
  }
}

module.exports = EspecializacaoController
