
'use strict'
const User = use('App/Models/User');
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

    async store({request,response,view,auth}) {
        try{
            const data = request.all();

            const user = await User.create({
                cpf : data.cpf,
                type_of_user: data.type_of_user,
                email:data.email,
                password: data.password,
                contact_number: data.contact_number,
                birth_date: data.birth_date,
                url_image: data.url_image
            })

            return user
            
        }  catch (error) {
            console.error(error)
            throw error
        }
    }
}
module.exports = AuthController