'use strict'
const Patient = use('App/Models/Patient');
const Prescriptions = use('App/Models/Prescriptions');

class PatientController {
  async showPendingAppointment ({auth}){
    try {
      const appointments = await Appointment.query()
          .where('patient_id',auth.id)
          .where('status','pending')
          .fetch()

      return appointments    
      } catch (error) {
          console.log(error)
          throw error
      }
}
  async showAcceptAppointment ({auth}){
    try {
      const appointments = await Appointment.query()
          .where('patient_id',auth.id)
          .where('status','accept')
          .fetch()

      return appointments    
      
      } catch (error) {
          console.log(error)
          throw error
      }
}
  async showCancelAppointment ({auth}){
    try {
      const appointments = await Appointment.query()
          .where('patient_id',auth.id)
          .where('status','cancel')
          .fetch()

      return appointments    
      } catch (error) {
          console.log(error)
          throw error
      }
}
  async showFinishedAppointment ({auth}){
    try {
    const appointments = await Appointment.query()
        .where('patient_id',auth.id)
        .where('status','finished')
        .fetch()

    return appointments    
    } catch (error) {
        console.log(error)
        throw error
    }
}
  async makeAppointment({auth, request, response}){
    try {
      const data = request.all()
      
      const newAppointment = Appointment.create({
        date_start: data.date_start,
        date_end: data.date_end,
        doctor_id: data.doctor_id
      })

      return response.json({
        message: 'consulta solicitada com sucesso! agora basta esperar a confirmação do médico',
        data: newAppointment
      })
    } catch (error) {
      console.log(error)
      throw error
    }
  }
  async showPrescriptions({auth,request}){
    return  Prescriptions.query()
      .join('appointment', 'patient_id',auth.id)
      .fetch()
  }
}

module.exports = PatientController
