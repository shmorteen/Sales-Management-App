const ItemController = require('./item.controller')

exports.itemRoutes = function(app){
    app.post('/add-item', [ItemController.itemController.add]);
    app.get('/all-items', [ItemController.itemController.getItm]);
}