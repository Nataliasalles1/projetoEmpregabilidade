const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const ProfessionalSchema = require("../models/ProfessionalModel");

const createProfessionals = async (req, res) => {
    const { name, cpf, telephone, residence, own_place, address: { zip_code, road, number, complement, state, city, district }, modality, payment_form } = req.body;
    try {
        const professional = new ProfessionalSchema({
            name: name,
            cpf: cpf,
            telephone: telephone,
            residence: residence,
            own_place: own_place,
            address: {
                zip_code: zip_code,
                road: road,
                number: number,
                complement: complement,
                state: state,
                city: city,
                district: district
            },
            modality: modality,
            payment_form: payment_form
        })

        const newProfessional = await professional.save();
        res.status(201).json({
            Professional: newProfessional
        })

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

const searchProfissionals = async (req, res) => {
    const { name } = req.query;

    let query = {};

    if (name) query.name = new RegExp(name, 'i');

    try {
        const professional = await ProfessionalSchema.find(query);
        res.status(200).json({
            message: "Professionals found",
            Profissionais: professional
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const searchByModality = async (req, res) => {
    const { modality } = req.query
    let query = {};
    if (modality) query.modality = new RegExp(modality, 'i');
    try {
        const professional = await ProfessionalSchema.find(query)
        if (professional.length == 0) throw new Error(`Sorry, we don't have professionals available in modality ${modality}`)
        res.status(200).json({
            message: "Professionals found:",
            Professional: professional
        })

    } catch (error) {
        res.status(404).json({
            message: error.message
        })

    }
}

const searchByDistrict = async (req, res) => {
    const { destrict } = req.query
    let query = {};
    if (destrict) query["address.district"] = new RegExp(destrict, 'i');
    try {
        const professional = await ProfessionalSchema.find(query)
        if (professional.length == 0) throw new Error(`Sorry, we don't have professionals available in district ${district}`)
        res.status(200).json({
            message: "Professionals found:",
            Professional: professional
        })

    } catch (error) {
        res.status(404).json({
            message: error.message
        })

    }
}

const professionalById = async (req, res) => {
    const { id } = req.params
    try {
        if (id.length > 24 || id.length > 24) {
            res.status(404).json({
                message: `Incorrect ID number, please re-enter!`
            })
        }

        const professional = await ProfessionalSchema.findOne({ id })
        if (professional.length == 0) {
            res.status(200).json({ message: `Professional not found` })
        }
        res.status(200).json({
            message: `Professional corresponding to the ID entered`,
            Professional: professional
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const updateProfessional = async (req, res) => {
    const { id } = req.params

    const { telephone, residence, own_place, address: { zip_code, road, number, complement, state, city, district }, modality, payment_form } = req.body;

    try {
        if (id.length > 24 || id.length > 24) {
            res.status(404).json({
                message: `Incorrect ID number, please re-enter!`
            })
        }

        /*
        if (String(cpf).length > 14 || String(cpf).length < 14){
            res.status(404).json({
                message:`CPF inválido, digite novamente.`
            })
        }*/

        const professionalFound = await ProfessionalSchema.updateOne({
            telephone, residence, own_place, address: { zip_code, road, number, complement, state, city, district }, modality, payment_form
        })
        const updateProfessinal = await ProfessionalSchema.find({ id })
        if (updateProfessinal.length == 0) {
            res.status(404).json({
                message: `Professional not found!`
            })
        }

        res.status(200).json({
            message: `Successfully updated professional.`,
            Colaboradora: updateProfessinal
        })

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

const deleteProfessional = async (req, res) => {
    try {
        const professional = await ProfessionalSchema.findById(req.params.id)

        await professional.delete();

        res.status(200).json({
            message: `Professional ${professional.name} has been successfully removed.`
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}



module.exports = {
    createProfessionals,
    searchProfissionals,
    searchByModality,
    searchByDistrict,
    professionalById,
    updateProfessional,
    deleteProfessional,
}