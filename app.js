"use strict";
require('./config/config');
const express = require('express');
const ModelIndex = require('./models');
const RouteManager = require('./routes');
ModelIndex
    .openDatabase()
    .then(_startServer)
    .catch((err) => {
        console.error(err);
    });

// INTERNAL

function _startServer() {

    const app = express();

    RouteManager.attach(app);

    app.listen(CONFIG.port, function () {
        console.log('Server started on 8080...');
    });
}
