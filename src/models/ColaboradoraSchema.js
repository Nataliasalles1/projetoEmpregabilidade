const mongoose = require('mongoose');

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
        cep:{
            type: String,
            required: true
        },
        rua:{
            type: String,
            required: true
        },
        numero:{
            type: Number,
            required: true
        },
        complemento:{
            type: String,
            required: true
        },
        estado:{
            type: String,
            required: true
        },
        cidade:{
            type: String,
            required: true
        },
        bairro:{
            type: String,
            required: true
        }
    },

    modalidade:{
        type: String,
        required: true
    },
    
    forma_pagamento: [{
        
    }]
})



module.exports = mongoose.model('colaboradora', ColaboradoraSchema) 