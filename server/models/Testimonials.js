const schemaName = 'testimonials';
const schemaConfig = {
    testimonials: [{
        text: String,
        user: String
    }]
};
let TestimonialsModel = require('../ModelGenerater')(schemaName, schemaConfig);
module.exports = TestimonialsModel;