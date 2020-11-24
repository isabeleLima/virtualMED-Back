'use strict'
const Receita = use("App/Models/Receita");

class ReceitaController {

  async index ({ request, response, view }) {
  }

  
  async create ({ request, response, view }) {
  }

 
  async store ({ request, response }) {
  }


  async show ({ params, request, response, view }) {
  }

  
  async edit ({ params, request, response, view }) {
  }

 
  async update ({ params, request, response }) {
  const receita = await Receita.findOrFail(params.id);
  const receita_texto = request.only("receita");

  receita.merge(receita_texto);
  await receita.save();
  }

  
  async destroy ({ params, request, response }) {
    const receita = await Receita.findOrFail(params.id);
    await receita.delete();
  }
}

module.exports = ReceitaController
