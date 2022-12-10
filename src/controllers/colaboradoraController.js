const mongoose = require('mongoose');
const UserSchema = require('../models/UserModel')
const bcrypt = require("bcrypt");
const ColaboradoraSchema = require("../models/ColaboradoraModel");

const criarColaboradora = async(req, res) => {
    const {nome, cpf, telefone, domicilio, local_proprio, endereco:{cep, rua, numero, complemento, estado, cidade, bairro}, modalidade ,forma_pagamento} = req.body;
    try{
        const colaboradora = new ColaboradoraSchema({
            nome: nome,
            cpf: cpf,
            telefone: telefone,
            domicilio: domicilio,
            local_proprio: local_proprio,
            endereco: {
            cep: cep,
            rua: rua,
            numero: numero,
            complemento: complemento,
            estado: estado,
            cidade: cidade,
            bairro: bairro 
        },
            modalidade: modalidade,
            forma_pagamento: forma_pagamento
        })
        
        const salvarColaboradora = await colaboradora.save();
        res.status(201).json({
            colaboradora: salvarColaboradora
        })

    } catch(error){
        res.status(400).json({
            message: error.message
        })
    }
}

const buscarColaboradora = async(req, res) => {
    const {nome} = req.query;

    let query = { };

    if (nome) query.nome = new RegExp(nome, 'i');

    try {
        const colaboradoras = await ColaboradoraSchema.find(query);
        res.status(200).json({
            message: "Colaboradoras encontradas",
            Colaboradoras: colaboradoras
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const buscarModalidade = async(req, res) => {
    const {modalidade} = req.query
    let query = { };
    if (modalidade) query.modalidade = new RegExp(modalidade, 'i');
    try {
        const colaboradoras = await ColaboradoraSchema.find(query)
        if(colaboradoras.length == 0) throw new Error(`Desculpas, não temos coladoradoras na modalidade ${modalidade}`)
        res.status(200).json({
            message:"Colaboradoras localizadas",
            Colaboradoras: colaboradoras
        })

    } catch (error) {
        res.status(404).json({
            message: error.message
        })
        
    }
}

const buscarPorBairro = async(req, res) => {
    const {bairro} = req.query
    let query = { };
    if (bairro) query["endereco.bairro"] = new RegExp(bairro, 'i');
    try {
        const colaboradoras = await ColaboradoraSchema.find(query)
        if(colaboradoras.length == 0) throw new Error(`Desculpas, não temos coladoradoras no bairro ${bairro}`)
        res.status(200).json({
            message:"Colaboradoras localizadas",
            Colaboradoras: colaboradoras
        })

    } catch (error) {
        res.status(404).json({
            message: error.message
        })
        
    }
}

const obterColaboradoraPorId = async (req, res) => {
    const { id } = req.params
    try {
        if(id.length > 24 || id.length > 24) {
            res.status(404).json({
                message:`Número de ID incorreto, por favor, digite novamente!`
            })
        }

        const colaboradora = await ColaboradoraSchema.findOne({ id })
        if (colaboradora.length == 0){
            res.status(200).json({message:`colaboradora não encontrada`})
        }
        res.status(200).json({
            message:`Colaboradora correspondente ao ID digitado`,
            Colaboradora: colaboradora
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const atualizarColaboradora = async (req, response) => {
    const { id } = req.params
   
    const {telefone, domicilio, local_proprio, endereco:{cep, rua, numero, complemento, estado, cidade, bairro}, modalidade,forma_pagamento} = req.body;
    
    try{
        if(id.length > 24 || id.length > 24) {
            response.status(404).json({
                message:`Número de ID incorreto, por favor, digite novamente!`
            })
        }

        /*
        if (String(cpf).length > 14 || String(cpf).length < 14){
            response.status(404).json({
                message:`CPF inválido, digite novamente.`
            })
        }*/

        const colaboradoraEncontrada = await ColaboradoraSchema.updateOne({ 
            telefone, domicilio, local_proprio, endereco:{cep, rua, numero, complemento, estado, cidade, bairro}, modalidade ,forma_pagamento
        })
        const colaboradoraAtualizado = await ColaboradoraSchema.find({ id })
            if(colaboradoraAtualizado.length == 0 ) {
                response.status(404).json({
                    message:`Colaboradora não encontrada!`
                })
            }
     
        response.status(200).json({
            message: `Colaboradora atualizada com sucesso.`,
            Colaboradora: colaboradoraAtualizado
        })

   } catch (error){
        response.status(400).json({
            message: error.message
      })
   }
}

const deletarColaboradora = async(req, res) =>{
    try{
        const colaboradora = await ColaboradoraSchema.findById(req.params.id)

        await colaboradora.delete();

        res.status(200).json({
            message: `A colaboradora ${colaboradora.nome} foi removida com sucesso.`
        })
    }catch(error){
        res.status(400).json({
            message: error.message
        })
    }
}

const createUser = async (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10)
    req.body.password = hashedPassword
  
    const emailExists = await UserSchema.exists({ email: req.body.email })
  
    if (emailExists) {
      return res.status(409).send({
        message: 'Email já cadastrado',
      })
    }
  
    try {
      const newUser = new UserSchema(req.body)
  
      const savedUser = await newUser.save()
  
      res.status(201).send({
        message: 'User cadastrado com sucesso!',
        savedUser,
      })
    } catch (err) {
      console.error(err)
      res.status(500).send({
        message: err.message,
      })
    }
}

const getAllUsers = async (req, res) => {
    UserSchema.find(function (err, users) {
      if (err) {
        res.status(500).send({ message: err.message })
      }
      res.status(200).send(users)
    })
}
 

module.exports = {
    criarColaboradora,
    buscarColaboradora,
    buscarModalidade,
    buscarPorBairro,
    obterColaboradoraPorId,
    atualizarColaboradora,
    deletarColaboradora,
    createUser,
    getAllUsers
}