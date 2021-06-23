
'use strict'
const User = use('App/Models/User');
const Doctor = use('App/Models/Doctor');
const Patient = use('App/Models/Patient');

class AuthController {

    async login({auth,request}) {
        const { email, password } = request.all()

        const user = await User.query().where('email', email).first()
        const token = await auth.attempt(email, password)

        return token ? {
        token: token.token,
        name: user.name,
        email: user.email
        } : null

    }

    async storeNewPatient({request,response,view,auth}) {
        try{
            const data = request.all();

            const user = await User.create({
                name: data.name,
                cpf : data.cpf,
                type_of_user: data.type_of_user,
                email:data.email,
                password: data.password,
                contact_number: data.contact_number,
                birth_date: data.birth_date,
                url_image: data.url_image
            })

            if(data.type_of_user == 1){
                const doctor = await Doctor.create({
                    corem : data.corem,
                    residency: data.residency,
                    institution_id : data.institution_id,
                    user_id: user.id
                 })

                return response.json({
                    message: 'seu cadastro foi realizado com sucesso! Agora é só esperar a aprovação de um administrador', 
                    data: user
                })

            }else if(data.type_of_user == 2){
                const patient = await Patient.create({
                   blood_type : data.blood_type,
                   weight: data.weight,
                   height: data.height,
                   user_id: user.id
                })

                return response.json({
                    message: 'seu cadastro foi realizado com sucesso! Seja bem vindo!', 
                    data: user
                })
            }else{
                throw new Error('tipo de usuario invalido')
            }
            
        }  catch (error) {
            console.error(error)
            throw error
        }
    }
    
    async storeNewDoctor({request,response,view,auth}) {
        try{
            const data = request.all();

            const user = await User.create({
                name: data.name,
                cpf : data.cpf,
                type_of_user: data.type_of_user,
                email:data.email,
                password: data.password,
                contact_number: data.contact_number,
                birth_date: data.birth_date,
                url_image: data.url_image
            })

            if(data.type_of_user == 1){
                const doctor = await Doctor.create({
                    coren : data.corem,
                    residency: data.residency,
                    institution_id : data.institution_id,
                    user_id: user.id
                 })

                return response.json({
                    message: 'seu cadastro foi realizado com sucesso! Agora é só esperar a aprovação de um administrador', 
                    data: user
                })
            
            }else{
                throw new Error('tipo de usuario invalido')
            }
            
        }  catch (error) {
            console.error(error)
            throw error
        }
    }

    async storeNewAdm({request,response,auth}) {
        try{

            const adm =  await auth.getUser();

            console.log(adm)

            if(adm.type_of_user != 0){
                throw new Error('Você não tem permissão para isso')
            }else{
                const data = request.all();

                const user = await User.create({
                    name: data.name,
                    cpf : data.cpf,
                    type_of_user: data.type_of_user,
                    email:data.email,
                    password: data.password,
                    contact_number: data.contact_number,
                    birth_date: data.birth_date,
                    url_image: data.url_image
                })

                return response.json({
                    message: 'Novo adm cadastrado com sucesso! Seja bem vindo!', 
                    data: user
                })

            }
        }  catch (error) {
            console.error(error)
            throw error
        }
    }

}
module.exports = AuthController