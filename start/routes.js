'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return {
    greeting: 'Hello world in JSON'
  }
})


Route.resource('/cadastro', 'UserController').apiOnly();

Route.resource('/Instituicao', 'InstituicaoController').apiOnly();

Route.resource('/Especializacao', 'EspecializacaoController').apiOnly();

Route.resource('/EspecializacaoMedico', 'EspecializacaoMedicoController').apiOnly();

Route.resource('consulta', 'ConsultaController').middleware('auth');

Route.resource('/Receita', 'ReceitaController').apiOnly();

Route.post('Showconsulta', 'ConsultaController.show').middleware('auth');

Route.get('ShowEspecializacaoMedico', 'EspecializacaoMedicoController.show').middleware('auth');

Route.get('users', 'UserController.show').middleware('auth');

Route.get('ShowConsulta', 'ConsultaController.show').middleware('auth');

Route.post('login', 'UserController.login')
