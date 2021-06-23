'use strict'
const User = use('App/Models/User');
const Doctor = use('App/Models/Doctor');
const Patient = use('App/Models/Patient');
class UserController {

  async show({ auth, params }) {
    return auth.getUser();
  }

  async update({ params, request, response }) {
    try {
      const user = await User.findOrFail(params.id);
      const data = resquest.all()
  
      user.merge({
        name: data.name,
        cpf: data.cpf,
        email: data.email,
        password: data.password,
        contact_number: data.contact_number,
        birth_date: data.birth_date,
        url_image: data.url_image
      })
  
      user.save()
  
      if (type_of_user == 1) {
        const doctor = await Doctor.query().where('user_id', params.id)
  
        doctor.merge({
          corem: data.corem,
          residency: data.residency,
          institution_id: data.institution_id
        })
  
        doctor.save()
  
        return User.query()
        .where('id', params.id)
        .with('doctors')
  
      } else if (type_of_user == 1) {
        const patient = await Patient.query().where('user_id', params.id)
  
        patient.merge({
          blood_type: data.blood_type,
          weight: data.weight,
          height: data.height
        })
  
        patient.save()
  
        return User.query()
        .where('id', params.id)
        .with('patients')
      }
  
      return User.query()
      .where('id', params.id)

    } catch (error) {
      console.log(error)
      throw error
    }
   
  }
}


module.exports = UserController
