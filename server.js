const express = require("express");
const app = express();
const config = require('./config/default');
const pkg = require('./package.json');

global.logMessage = (msg, data) => {
    console.log(`${pkg.name} v${pkg.version} :: ${msg}`, data);
};


const JobManager = require('./server/JobManager');

JobManager.kickOffJobQueue(config.mockJobs);

(async () => {
    (async () => {
        
        app.listen(process.env.PORT || 5000, (err) => {
            global.logMessage(err || 'api running on port ' + config.PORT);
        });
    })().catch(err => global.logMessage(err));

})();

exports = module.exports = app;