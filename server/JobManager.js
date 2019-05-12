const config = require('../config/default');
const _ = global;
const Queue = require('bull');

const doathingQueue = new Queue('doathing', config.redis);

doathingQueue.process((job, done) => {
    let timoutValue = getRandomTimoutValue();
    setTimeout(() => {
        _.logMessage(`doathing ${job.id} completed after ${timoutValue} seconds`, job);
        job.completedAt = new Date();
        done(job);
    }, timeoutValue);
});


doathingQueue.on('completed', (data) => {
    _.logMessage(`process completed at ${data.completedAt.toString()}`, data);
})
.on('failed', (errorMessage) => {
    _.logMessage(`process failed `, errorMessage);
})
.on('progress', (progress, data) => {
    _.logMessage(`process ` + progress + '% complete with data ', data);
});

let kickOffJobQueue = (jobs) => {
    for (job in jobs) {
        doathingQueue.add(job);
    }
};

let getRandomTimoutValue = () => { 
    let min = Math.ceil(config.jobQueue.timoutMin);
    let max = Math.floor(config.jobQueue.timoutMax);
    return (Math.random() * (max - min + 1) + min) * 1000;
};

module.exports = {
    kickOffJobQueue: kickOffJobQueue  
};