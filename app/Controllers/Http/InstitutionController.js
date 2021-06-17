'use strict'

const Instituicao = use('App/Models/Instituicao');



class InstituicaoController {
  async index({ request, response, view }) {
    const instituicao = await Instituicao.all();
    return instituicao;
  }

  async store({ request, response, view}) {
    const data = request.only(['nome']);
    const instituicao = await Instituicao.create(data);
    return instituicao;

  }

  async update({ params, request, response }) {
    const instituicao = await Instituicao.findOrFail(params.id);
    const data = request.only(['nome']);
    
    instituicao.merge(data);
    await instituicao.save();
    
    return instituicao
  }

  async destroy({ params, request, response }) {
    const instituicao = await Instituicao.findOrFail(params.id);
    await instituicao.delete();
  }

}

module.exports = InstituicaoController
