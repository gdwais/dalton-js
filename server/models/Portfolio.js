const schemaName = 'portfolio';
const schemaConfig = {
    projects: [{
        title: String,
        category: String,
        image: String,
        url: String
    }]
};
let PortfolioModel = require('../ModelGenerater')(schemaName, schemaConfig);
module.exports = PortfolioModel;