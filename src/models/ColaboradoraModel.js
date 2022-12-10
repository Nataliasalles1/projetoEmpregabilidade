const mongoose = require('mongoose');
const EnderecoSchema = require('./EnderecoSchema');

const ColaboradoraSchema = new mongoose.Schema({
 
    nome: {
        type: String,
        required: true
    },

    cpf: {
        type: String,
        required: true
    },

    telefone:{
        type: String,
        required: false
    },

    domicilio:{
        type: Boolean,
        required: true
    },

    local_proprio:{
        type: Boolean,
        required: true
    },

    endereco:{
        type: EnderecoSchema,
        required: true
    },

    modalidade:{
        type: String,
        required: true
    },
    
    forma_pagamento: [{
        
    }]
})



module.exports = mongoose.model('colaboradora', ColaboradoraSchema) 