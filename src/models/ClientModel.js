const mongoose = require('mongoose');
const AddressSchema = require('./AddressModel');

const ClientSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    cpf: {
        type: String,
        required: true
    },

    telephone: {
        type: String,
        required: false
    },

    address: {
        type: AddressSchema,
        required: true
    },

    payment_form: [{

    }]
})


module.exports = mongoose.model('client', ClientSchema)