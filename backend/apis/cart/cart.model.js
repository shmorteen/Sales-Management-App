const Sequelize = require('sequelize');
const sequelize = require('../../config/connection');
const Cart = require('../../models/cart')(sequelize, Sequelize);
const ItemModel = require('../../models/item')(sequelize, Sequelize);

const cart = require('../../models/cart');
const saltRounds = 10;


//  Cart.sync();

exports.cartModel = {
    processOrder: (cartItem) => {
        return new Promise((resolve, reject) => {
            Cart.create(cartItem).then(cart => {
                resolve(cart);
            }, err => {
                reject(err);
            });
        });
    },
    update: (cartArray) => {
        return new Promise((resolve, reject) => {
            cartArray.map(i=>{
                let quant = i.quantityOut
                let itemname = i.itemname        
                ItemModel.findOne({
                    where: {
                        itemname
                    }
                }).then(result =>{
                    // console.log('Update', result)
                   let newQuantity = result.quantityIn - quant
                   let newQuantityOut = result.quantityOut + quant
                    ItemModel.update({
                       quantityIn: newQuantity,
                       quantityOut: newQuantityOut
                    }, 
                    {where:{itemname}}
                    )
                }, err => {

                }) 
                
            });
            resolve()
        });
        console.log('From Update', cartArray)
    },

    report: () => {
        return new Promise((resolve, reject) => {
            Cart.findAll({
                attributes: {
                    exclude:['id', 'updatedAt', 'total']
                }
            }).then(cart => {
                resolve(cart);
            }, err => {
                reject(err);
            })
        });
    }
}