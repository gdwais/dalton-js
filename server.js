const express = require("express");
const app = express();
const mongoose = require('mongoose');
const config = require('./config/default');
const pkg = require('./package.json');


global.logMessage = (msg) => {
    console.log(`${pkg.name} v${pkg.version} :: ${msg}`);
};

let populator = require('./server/populate');

let StartApplication = async () => {
    global.logMessage('connecting to mongodb at ' + config.DB_URL);
    mongoose.connect(process.env.DB_URL || config.DB_URL, { useNewUrlParser: true });
    app.listen(process.env.PORT || 5000);
    global.logMessage('api running on port ' + config.PORT);
};
let RunApplication = async() => {
    let response = await populator();
    if (response === true) {
        StartApplication().catch(err => global.logMessage(err));
    }
};


RunApplication();

exports = module.exports = app;