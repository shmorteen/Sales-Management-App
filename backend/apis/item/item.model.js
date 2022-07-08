const Sequelize = require('sequelize');
const sequelize = require('../../config/connection');
const Item = require('../../models/item')(sequelize, Sequelize);


const item = require('../../models/item');
const saltRounds = 10;


// Item.sync();

exports.itemModel = {
    addItems: (itemData) => {
        return new Promise((resolve, reject) => {
            const newItemData = { ...itemData };
            Item.create(newItemData).then(item => {
                resolve(item);
            }, err => {
                reject(err);
            });
        })
    },

    getAllItems: () => {
        return new Promise((resolve, reject) => {
            Item.findAll({
                attributes: {
                    exclude:['id', 'createdAt', 'updatedAt']
                }
            }).then(item => {
                resolve(item);
            }, err => {
                reject(err);
            })
        });
    }
}