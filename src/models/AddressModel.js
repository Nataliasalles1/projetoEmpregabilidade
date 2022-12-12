const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({

    zip_code: {
        type: String,
        required: true
    },
    road: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    complement: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    }

})



module.exports = AddressSchema