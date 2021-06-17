'use strict'
const User = use('App/Models/User');
class UserController {

  async show({auth,params}) {
    return  auth.getUser();

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




  

}


module.exports = UserController
