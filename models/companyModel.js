const mongoose = require('mongoose');
const schema = mongoose.Schema;

const companySchema = schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
})

const companyModel = mongoose.model('company', companySchema);
module.exports = companyModel;
