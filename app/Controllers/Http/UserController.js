'use strict'
const User = use('App/Models/User');
const Medico = use('App/Models/Medico');
const Paciente = use('App/Models/Paciente');
const Helpers = use('Helpers');


class UserController {
  async index({request,response,view }) {
    const user = await User.all();

    return user
    

  }

  async store({request,response,view,auth}) {
    const data = request.only(['nivel', 'email', 'password', 'nome', 'cpf', 'telefone', 'path', 'nascimento']);
    const data_m = request.only(['corem', 'user_id', 'instituicao_id']);
    const data_c = request.only(['sangue', 'peso', 'altura', 'user_id']);

    const profilePic = request.file('img');

    // let nome = new Date().getTime();
    // nome = `${nome}.${profilePic.subtype}`
    // const path = `uploads/userImage/${nome}`

    data.path = "deletedelete"

    // await profilePic.move(Helpers.tmpPath(`uploads/userImage/`), {
    //   name: `${nome}`
    // })

    const user = await User.create(data);
    const ID = await User.getMax('id');


    if (data.nivel == 1) {
      data_m.user_id = ID
      const medico = await Medico.create(data_m);

    } else if (data.nivel == 2) {
      data_c.user_id = ID
      const paciente = await Paciente.create(data_c);
    }

    return user;

  }

  async update({params,request,response}) {
    const user = await User.findOrFail(params.id);
    const medico = await Medico.findBy('user_id', `${params.id}`);
    const paciente = await Paciente.findBy('user_id', `${params.id}`);

    const data = request.only(['nivel', 'email', 'password', 'nome', 'cpf', 'telefone', 'path', 'nascimento']);
    const data_m = request.only(['corem', 'instituicao_id']);
    const data_c = request.only(['sangue', 'peso', 'altura']);

    // const profilePic = request.file('img');

    // let nome = new Date().getTime();
    // nome = `${nome}.${profilePic.subtype}`
    // const path = `uploads/userImage/${nome}`

     data.path = "testeupdate"

    // await profilePic.move(Helpers.tmpPath(`uploads/userImage/`), {
    //   name: `${nome}`
    // })

    user.merge(data);
    await user.save();
    const ID = await User.id;


    if (data.nivel == 1) {
      data_m.user_id = ID;
      medico.merge(data_m);
      await user.save();

    } else if (data.nivel == 2) {

      data_c.user_id = ID
      paciente.merge(data_c);
      await user.save();
    }


    return paciente

   }

  async destroy({params,request, response}) {
    const user = await User.findOrFail(params.id);
    await user.delete();
  }

  async login({auth,request}) {
    const {
      email,
      password
    } = request.all()
    return await auth.attempt(email, password)

  }

  async show({auth,params}) {
    const user = await auth.getUser()
    let retorno
    if (user.nivel == 1) {
      const medico = await Medico.findBy('user_id', user.id);
      medico.user = user
      retorno = medico

    } else if (user.nivel == 2) {
      const paciente = await Paciente.findBy('user_id', user.id);
      paciente.user = user
      retorno = paciente
    }

    return retorno;

  }

}


module.exports = UserController
