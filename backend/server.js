const express = require('express');
const bodyParser = require('body-parser');
const env = require('./config/env');
const user = require('./apis/user/user.route')
const item = require('./apis/item/item.route')
const cart = require('./apis/cart/cart.route')

const app = express();

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PATCH, PUT, HEAD');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, X-Requested-With, Range, Content-Type');
    if(req.method === 'OPTIONS'){
        return res.sendStatus(200);
    }else{
        return next();
    }
});

app.use(bodyParser.json());

user.userRoutes(app);
item.itemRoutes(app);
cart.cartRoutes(app);


app.listen(env.port, function(){
    console.log('App is linstening on port', env.port);
});