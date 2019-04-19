
const mongoose = require('mongoose');

module.exports = (schemaName, schemaConfig) => {
    let schema = new mongoose.Schema(schemaConfig);
    let model = mongoose.model(schemaName, schema);
    return model;
}