const ItemModel = require('./item.model');


exports.itemController = {
    add: (req, res) => {
        console.log('Added Item', req.body);
        ItemModel.itemModel.addItems(req.body).then((result) => {
            console.log(result);
            if (result) {
                res.send({ message: 'Item Added successfully', data: result });
            } else {
                res.send({ message: 'Item Added Failed', data: null });
            }
        }, error => console.log(error));
    },
    getItm: (req, res) => {
        console.log('Items', req.body);
        const { itemname, price, quantityIn, quantityOut } = req.body;
        ItemModel.itemModel.getAllItems(itemname, price, quantityIn, quantityOut).then(result => {
            const items = result;
            if (items != null) {
                    res.send(items);
            } else {
                res.send({ message: 'Item not found', data: null });
            }
        })
    }
}
