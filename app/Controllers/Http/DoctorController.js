'use strict'

const User = use('App/Models/User');
const Medico = use('App/Models/Medico');
const Consulta = use('App/Models/Consulta');



class MedicoController {
    
    async index({request, response, view, params }) {
     
     
        
    
      }

      async show ({ params, request, response, view, auth }) {


      }
    
      async update({ params, request, response }) {
        const medico = await Medico.findOrFail(params.id);
        const data = request.only(['corem', 'especializacao','instituicao']);
        
        medico.merge(data);
        await medico.save();
        
        return medico
      }
    
      async destroy({ params, request, response }) {
        const medico = await Medico.findOrFail(params.id);
        await medico.delete();
      }
}

module.exports = MedicoController
