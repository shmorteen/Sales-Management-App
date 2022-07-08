const CartModel = require('./cart.model');


exports.cartController = {
    processOrder: (req, res) => {
        console.log('Arrry', req.body);
        let cartArray = req.body.cart;
        let grandTotal = 0
        cartArray.map(e=>{
            grandTotal= (e.price * e.quantityOut) + grandTotal
        }); 
    
        cartItem = {
            items: cartArray,
            total: grandTotal
        }   
        console.log(cartItem)  
        CartModel.cartModel.processOrder(cartItem).then((result) => {
            if(result){
                CartModel.cartModel.update(cartArray).then((result) =>{
                  res.send({message: 'success', data: result});
                })
            }else{
                res.send({message: 'failed adding Cart', data: null});
            }
        }, error => console.log(error));
     },
     report: (req, res) => {
        const { items } = req.body;
        CartModel.cartModel.report(items).then(result => {
            const cart = result;
            console.log(cart)
            if (cart != null) {
                    res.send(cart);
            } else {
                res.send({ message: 'Report not found', data: null });
            }
        })
    }
}
