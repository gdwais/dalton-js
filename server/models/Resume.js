const schemaName = 'resume';
const schemaConfig = {
    skillmessage: String,
    work: [{
        company: String,
        title: String,
        years: String,
        description: String
    }],
    skills: [{
        name: String,
        level: String
    }]
};
let ResumeModel = require('../ModelGenerater')(schemaName, schemaConfig);
module.exports = ResumeModel;