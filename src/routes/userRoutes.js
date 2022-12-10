const express = require('express');
const router = express.Router();
const authController = require("../controllers/authController");

const controller = require('../controllers/authController');
const { checkAuth } = require("../middlewares/auth");

router.get("/all", checkAuth, controller.getAllUsers);
router.post("/create", controller.createUser);
router.post("/login", authController.login);
router.delete("/delete/:id", authController.deleteUserById)

module.exports = router;