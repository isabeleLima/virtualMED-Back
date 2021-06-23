'use strict'

const User = use('App/Models/User');
const Doctor = use('App/Models/Doctor')

class DoctorController {
    async activateDoctor({ params, auth, response }) {
        try {
            const doctor = await Doctor.query()
                .where('user_id', params.id)
                .first()

            doctor.merge({
                is_activated: 1
            })

            doctor.save()

            return response.json({
                message: `medico ativado com sucesso!`,
                data: doctor
            })

        } catch (error) {
            console.log(error)
            throw error
        }
    }
}
module.exports = DoctorController