'use strict'

const User = use('App/Models/User');
const Medico = use('App/Models/Medico');



class MedicoController {
    
    async index({request, response, view, params }) {
     
     
        
    
      }

      async show ({ params, request, response, view }) {
        const medico = await Medico.all();
        const user = await User.find(params.id)//aqui pegar id do get
        const usu_medico = await user.medico().fetch()

        // const dados = [...user, ...usu_medico]
        return dados;

      }
    
    
    
      // async store({ request, response, view}) {
      //   const data = request.only(['corem', 'especializacao','instituicao']);
      //   const medico = await Medico.create(data, user_id);
      //   return user_id;
    
      // }
    
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
