const Sequelize = require('sequelize');
const sequelize = require('../../config/connection');
const User = require('../../models/user')(sequelize, Sequelize);

const bcrypt = require('bcrypt');
const user = require('../../models/user');
const saltRounds = 10;


//  User.sync(); 

exports.userModel = {
    registerUser: (userData) => {
        return new Promise((resolve, reject) => {
            const password = userData.password;

            bcrypt.genSalt(saltRounds, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    const newUserData = {...userData, password: hash};
                    User.create(newUserData).then(user => {
                        resolve(user);
                    }, err => {
                        reject(err);
                    });
                })
            });
        })
    },

    logUserIn: (uname, pword) => {
        return new Promise((resolve, reject) => {
       User.findOne({
                where: {
                    username: uname
                }
            }).then(user => {
                resolve(user);
            }, err => {
                reject(err);
            })
        })
       
    }
}