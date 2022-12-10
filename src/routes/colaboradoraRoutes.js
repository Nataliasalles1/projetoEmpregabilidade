const express = require('express');
const router = express.Router();

const controller = require('../controllers/colaboradoraController');
const { checkAuth } = require("../middlewares/auth");

router.get("/getall", controller.buscarColaboradora);
router.get("/modality", controller.buscarModalidade);
router.get("/bairro", controller.buscarPorBairro);
router.get("/buscar/:id", controller.obterColaboradoraPorId);
router.post("/criar", controller.criarColaboradora);
router.patch("/update/:id", controller.atualizarColaboradora);
router.delete("/delete/:id", checkAuth, controller.deletarColaboradora);


module.exports = router;