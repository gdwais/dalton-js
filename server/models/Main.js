const mongoose = require('mongoose');
const mainSchema = new mongoose.Schema({
    name: String,
    occupation: String,
    description: String,
    image: String,
    bio: String,
    conactmessage: String,
    email: String,
    phone: String,
    address: {
        city: String,
        state: String,
        zip: String
    },
    website: String,
    resumedownload: String,
    social: [{
        name: String,
        url: String,
        className: String
    }]
});

var MainModel = mongoose.model('main', mainSchema);
module.exports = MainModel;
