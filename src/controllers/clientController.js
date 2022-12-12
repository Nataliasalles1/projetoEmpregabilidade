const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const ClientSchema = require("../models/ClientModel");

const createClient = async (req, res) => {
    const { name, cpf, telephone, address: { zip_code, road, number, complement, state, city, district }, payment_form } = req.body;
    try {
        const client = new ClientSchema({
            name: name,
            cpf: cpf,
            telephone: telephone,
            address: {
                zip_code: zip_code,
                road: road,
                number: number,
                complement: complement,
                state: state,
                city: city,
                district: district
            },
            payment_form: payment_form
        })

        const saveClient = await client.save();
        res.status(201).json({
            Client: saveClient
        })

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

const searchClient = async (req, res) => {
    const { name } = req.query;

    let query = {};

    if (name) query.name = new RegExp(name, 'i');

    try {
        const client = await ClientSchema.find(query);
        res.status(200).json({
            message: "Client found",
            Client: client
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const clientById = async (req, res) => {
    const { id } = req.params
    try {
        if (id.length > 24 || id.length > 24) {
            res.status(404).json({
                message: `Incorrect ID number, please re-enter!`
            })
        }

        const client = await ClientSchema.findOne({ id })
        if (client.length == 0) {
            res.status(200).json({ message: `Client not found` })
        }
        res.status(200).json({
            message: `Client corresponding to the ID entered`,
            Client: client
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const updateClient = async (req, response) => {
    const { id } = req.params

    const { telephone, address: { zip_code, road, number, complement, state, city, district }, payment_form } = req.body;

    try {
        if (id.length > 24 || id.length > 24) {
            response.status(404).json({
                message: `Incorrect ID number, please re-enter!`
            })
        }

        /*
        if (String(cpf).length > 14 || String(cpf).length < 14){
            response.status(404).json({
                message:`CPF inválido, digite novamente.`
            })
        }*/

        const clientFound = await ClientSchema.updateOne({
            telephone, address: { zip_code, road, number, complement, state, city, district }, payment_form
        })
        const clientUpdate = await ClientSchema.find({ id })
        if (clientUpdate.length == 0) {
            response.status(404).json({
                message: `Client not found!`
            })
        }

        response.status(200).json({
            message: `Client updated successfully.`,
            Client: clientUpdate
        })

    } catch (error) {
        response.status(400).json({
            message: error.message
        })
    }
}

const deleteClient = async (req, res) => {
    try {
        const client = await ClientSchema.findByIdAndDelete(req.params.id)

        await client.delete();

        res.status(200).json({
            message: `A client ${client.name} has been successfully removed.`
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

module.exports = {
    createClient,
    clientById,
    searchClient,
    updateClient,
    deleteClient
}