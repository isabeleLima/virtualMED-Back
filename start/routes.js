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
  return { greeting: 'Hello world in JSON' }
})


Route.resource('/cadastro', 'UserController').apiOnly();

Route.resource('/Medico', 'MedicoController').apiOnly();

Route
  .post('login', 'UserController.login') 

Route
  .get('users', 'UserController.show')
  .middleware('auth');

  Route
  .resource('consulta', 'ConsultaController')
  .middleware('auth');

  