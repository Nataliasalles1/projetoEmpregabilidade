const mongoose = require('mongoose');
const AddressSchema = require('./AddressModel');

const ProfessionalSchema = new mongoose.Schema({

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

    residence: {
        type: Boolean,
        required: true
    },

    own_place: {
        type: Boolean,
        required: true
    },

    address: {
        type: AddressSchema,
        required: true
    },

    modality: {
        type: String,
        required: true
    },

    payment_form: [{

    }]
})



module.exports = mongoose.model('Professional', ProfessionalSchema) 