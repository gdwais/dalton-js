const async = require('async');
const resumeData = require('../config/resumeData.json');
const MainModel = require('./models/Main');
const PortfolioModel = require('./models/Portfolio');
const ResumeModel = require('./models/Resume');
const TestimonialsModel = require('./models/Testimonials');
const _ = global;
let PopulateMongoDb = () => {
    let section = 'main';
    _.logMessage(`populating ${section} data`);
    MainModel.create(resumeData.main, function(err, res){
        err ? _.logMessage(err) : _.logMessage(`${section} model created :: ${JSON.stringify(res)}`);
    });
    
    section = 'portfolio';
    _.logMessage(`populating ${section} data`);
    PortfolioModel.create(resumeData.portfolio, (err, res) => {
        err ? _.logMessage(err) : _.logMessage(`${section} model created :: ${JSON.stringify(res)}`);
    });

    section = 'resume';
    _.logMessage(`populating ${section} data`);
    ResumeModel.create(resumeData.resume, (err, res) => {
        err ? _.logMessage(err) : _.logMessage(`${section} model created :: ${JSON.stringify(res)}`);
    });

    section = 'testimonials';
    _.logMessage(`populating ${section} data`);
    TestimonialsModel.create(resumeData.testimonials, (err, res) => {
        err ? _.logMessage(err) : _.logMessage(`${section} model created :: ${JSON.stringify(res)}`);
    });
};

module.exports = PopulateMongoDb;