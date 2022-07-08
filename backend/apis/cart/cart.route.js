const CartController = require('./cart.controller')

exports.cartRoutes = function(app){
    app.post('/add-cart', [CartController.cartController.processOrder]);
    app.get('/get-report', [CartController.cartController.report]);
}