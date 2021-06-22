'use strict'

const User = use('App/Models/User')
const Doctor = use('App/Models/Doctor')
const Appointment = use('App/Models/Appointment')


class DoctorController {
    async showPendingAppointment ({auth,request,response}){
        try {
        const appointments = await Appointment.query()
            .where('doctor_id',auth.id)
            .where('status','pending')
            .fetch()

        return appointments    
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    async showAcceptAppointment ({auth,request,response}){
        try {
        const appointments = await Appointment.query()
            .where('doctor_id',auth.id)
            .where('status','accept')
            .fetch()

        return appointments    
        
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    async showCancelAppointment ({params,auth,request,response}){
        try {
        const appointments = await Appointment.query()
            .where('doctor_id',auth.id)
            .where('status','cancel')
            .fetch()

        return appointments    
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    async showFinishedAppointment ({params,auth,request,response}){
        try {
        const appointments = await Appointment.query()
            .where('doctor_id',auth.id)
            .where('status','finished')
            .fetch()

        return appointments    
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    async CancelAppointment ({auth,request,response}){
        try {
        const data = request.all()
        const appointment = await Appointment.query()
            .where('doctor_id',auth.id)
            .where('id',params.id)
            .first()

        appointment.merge({
            status: 'cancel',
            reason: data.reason
        })

        appointment.save()

        return appointment    

        } catch (error) {
            console.log(error)
            throw error
        }
    }
}

module.exports = DoctorController
