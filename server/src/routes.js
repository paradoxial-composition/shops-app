const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register, // validation rule
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)
}
