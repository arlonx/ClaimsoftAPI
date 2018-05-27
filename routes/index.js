'use strict';
const RouteManager = function() { };

RouteManager.attach = function(app) {
    app.use('/claim', require('./claim'));
    app.use('/order', require('./order'));
    app.use('/productService', require('./product'));
    app.use('/teamService', require('./teamService'));
    app.use('/user', require('./user'));
};

module.exports = RouteManager;
