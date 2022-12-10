const mongoose = require('mongoose');
const EnderecoSchema = require('./EnderecoSchema');

const ClienteSchema = new mongoose.Schema({
 
    nome: {
        type: String,
        required: true
    },

    cpf:{
        type: String,
        required: true
    },

    telefone: {
        type: String,
        required: false
    },

    endereco: {
        type: EnderecoSchema,
        required: true
    },
    
    forma_pagamento: [{
        
    }]
})


module.exports = mongoose.model('cliente', ClienteSchema)