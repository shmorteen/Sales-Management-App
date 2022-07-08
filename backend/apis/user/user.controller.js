const UserModel = require('./user.model');
const bcrypt = require('bcrypt');

exports.userController = {
    register: (req, res) => {
        console.log('Registration Data', req.body);
        UserModel.userModel.registerUser(req.body).then((result) => {
            console.log(result);
            if (result) {
                res.send({ message: 'Registration successful', data: result });
            } else {
                res.send({ message: 'Registration Failed', data: null });
            }
        }, error => console.log(error));
    },

    login: (req, res) => {
        console.log('Login Data', req.body);
        const { uname, pword } = req.body;
        UserModel.userModel.logUserIn(uname, pword).then(result => {
            if (result != null) {
                const { password } = result.dataValues;
                bcrypt.compare(pword, password).then((result) => {
                    console.log(res);
                    if (result) {
                        res.send({ message: 'Login successful', data: result });
                    }
                });
            } else {
                res.send({ message: 'Login Failed', data: null });
            }
        })
    }
}