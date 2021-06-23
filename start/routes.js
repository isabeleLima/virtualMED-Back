'use strict'

const DoctorController = require('../app/Controllers/Http/adm/DoctorController')

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

Route.group(() => {
  Route.post('login' , 'AuthController.login')
  Route.post('cadastro/adm', 'AuthController.storeNewAdm')
  Route.post('cadastro/patient', 'AuthController.storeNewPatient')
  Route.post('cadastro/doctor', 'AuthController.storeNewDoctor')

}).prefix('auth')

Route.group(() => {
  
  Route.get('user/adm', 'adm/UserController.listAdm')
  Route.get('user/patient', 'adm/UserController.listPatientes')
  Route.get('user/doctor', 'adm/UserController.listDoctors')

  Route.put('doctor/:id','adm/DoctorController.activateDoctor')
  Route.resource('user', 'adm/UserController')


}).prefix('adm')

  