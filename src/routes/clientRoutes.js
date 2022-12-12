const express = require('express');
const router = express.Router();

const controller = require('../controllers/clientController');
const { checkAuth } = require("../middlewares/auth");

router.get("/all", controller.searchClient);
router.get("/search/:id", controller.clientById);
router.post("/create", controller.createClient);
router.patch("/update/:id", controller.updateClient);
router.delete("/delete/:id", checkAuth, controller.deleteClient);

module.exports = router;