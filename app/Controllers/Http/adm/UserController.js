'use strict'

const User = use('App/Models/User');

class UserController {
  async index({ request, response, view }) {
    return User.all()
  }


  async destroy({ params, response }) {
    try {
      const user = await User.findOrFail(params.id);
      await user.delete();

      return response.json({
        message: 'Usuario excluido com sucesso',
        data: user
      })
    } catch (error) {
      console.error(error)
      throw error
    }

  }

}


module.exports = UserController