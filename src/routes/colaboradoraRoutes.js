const express = require('express');
const router = express.Router();

const controller = require('../controllers/colaboradoraController');
const authController = require("../controllers/authController");

const { checkAuth } = require("../middlewares/auth");

router.get("/all", checkAuth, controller.getAllUsers);
router.post("/create", controller.createUser);
router.post("/login", authController.login);

router.get("/getall", controller.buscarColaboradora);
router.get("/modalidade", controller.buscarModalidade);
router.get("/bairro", controller.buscarPorBairro);
router.get("/buscar/:id", controller.obterColaboradoraPorId);
router.post("/criar", controller.criarColaboradora);
router.patch("/update/:id", controller.atualizarColaboradora);
router.delete("/delete/:id", checkAuth, controller.deletarColaboradora);




module.exports = router;