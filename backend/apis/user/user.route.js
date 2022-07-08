const UserController = require('./user.controller')

exports.userRoutes = function(app){
    app.post('/register', [UserController.userController.register]);
    app.post('/login', [UserController.userController.login]);
}