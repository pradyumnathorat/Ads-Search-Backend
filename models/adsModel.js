const mongoose = require('mongoose');
const schema = mongoose.Schema;

const adsSchema = schema({
    companyId: {
        type: schema.Types.ObjectId, 'ref': 'company', required: true
    },
    primaryText: {
        type: String,
        required: true
    },
    headline: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    CTA: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})

const adsModel = mongoose.model('ad', adsSchema);
module.exports = adsModel;
