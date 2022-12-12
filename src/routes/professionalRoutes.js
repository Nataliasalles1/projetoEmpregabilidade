const express = require('express');
const router = express.Router();

const controller = require('../controllers/professionalController');
const { checkAuth } = require("../middlewares/auth");

router.get("/getall", controller.searchProfissionals);
router.get("/modality", controller.searchByModality);
router.get("/district", controller.searchByDistrict);
router.get("/search/:id", controller.professionalById);
router.post("/create", controller.createProfessionals);
router.patch("/update/:id", controller.updateProfessional);
router.delete("/delete/:id", checkAuth, controller.deleteProfessional);


module.exports = router;