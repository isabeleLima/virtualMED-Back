'use strict'
const User = use('App/Models/User');
const Medico = use('App/Models/Medico');
const Paciente = use('App/Models/Paciente');
const Consulta = use('App/Models/Consulta');

class ConsultaController {
       async store({ request, response, view, auth}) {
        const user = await auth.getUser()
        const data = request.only(['dia', 'paciente_user_id','medico_user_id']);
        data['paciente_user_id'] = await user.id 
        const consulta = await Consulta.create(data)

        return consulta;
      }
}

module.exports = ConsultaController
