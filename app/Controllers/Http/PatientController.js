'use strict'
const Paciente = use('App/Models/Paciente');
class PacienteController {
    async index({ request, response, view }) {
        const paciente = await Paciente.all();
        return paciente;
    
      }
    
      // async store({ request, response, view}) {
      //   const data = request.only(['corem', 'especializacao','instituicao']);
      //   const medico = await Medico.create(data, user_id);
      //   return user_id;
    
      // }
    
      async update({ params, request, response }) {
        const paciente = await Paciente.findOrFail(params.id);
        const paciente = request.only(['corem', 'especializacao','instituicao']);
        
        medico.merge(data);
        await paciente.save();
        
        return paciente
      }
    
      async destroy({ params, request, response }) {
        const paciente = await Paciente.findOrFail(params.id);
        await paciente.delete();
      }



}

module.exports = PacienteController
