"use strict";
const User = use("App/Models/User");
const Medico = use("App/Models/Medico");
const Paciente = use("App/Models/Paciente");
const Consulta = use("App/Models/Consulta");
const Receita = use("App/Models/Receita");
const Cancelada = use("App/Models/Cancelada");

class ConsultaController {
  async index({ request, response, view, params , auth}) {
    const user = await auth.getUser();
    let consulta;
    let {data} =  request.get("data")

    if (user.nivel == 1) {
      consulta = await Consulta.query()
        .where("medico_user_id", "=", `${user.id}`)
        .fetch();
    } else {
      consulta = await Consulta.query()
        .where("paciente_user_id", "=", `${user.id}`)
        .andWhere("dia", "<", data)
        .fetch();
    }
    return consulta;

  }

  async store({ request, response, view, auth }) {
    const user = await auth.getUser();
    const data = request.only(["dia", "paciente_user_id", "medico_user_id"]);
    if(user.nivel == 1){  
      data.medico_user_id = await user.id;
    }else if (user.nivel == 2){
      data.paciente_user_id = await user.id;
    }
    const consulta = await Consulta.create(data);
    return consulta;
  }

  async show({ params, request, response, view, auth }) {
    const user = await auth.getUser();
    let consulta;
    const status =  request.only("status");
    if(user.nivel == 1){
      if(status.status == "1"){
        consulta = await Consulta.query()
        .where("medico_user_id", "=", `${user.id}`).andWhere("status", "=", "1")
        .fetch();

      }else if (status == "2"){
        consulta = await Consulta.query()
        .where("medico_user_id", "=", `${user.id}`).andWhere("status", "=", "2")
        .fetch();
      }else if(status == "3"){
        consulta = await Consulta.query()
        .where("medico_user_id", "=", `${user.id}`).andWhere("status", "=", "3")
        .fetch();
      }else if (status == "4"){
        consulta = await Consulta.query()
        .where("medico_user_id", "=", `${user.id}`).andWhere("status", "=", "4")
        .fetch();
      }
      
    }
    return consulta;
  }
  async update({params,request,response}) {
    const consulta = await Consulta.findOrFail(params.id);
    const status = request.only("status");
    const data_r = request.only(['consulta_id', 'receita']);
    const data_cn = request.only(['consulta_id', 'motivo']);

    consulta.merge(status);
    await consulta.save();

    if(status.status == 3){
      data_r.consulta_id = params.id
      const receita = await Receita.create(data_r);
    }else if (status.status == 4){
      data_cn.consulta_id = params.id
      const cancelada = await Cancelada.create(data_cn);
    }

    return consulta
  }
  
}

module.exports = ConsultaController;
