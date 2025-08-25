const express = require("express");
const productController = require("../controller/userController");
const router = express.Router();

router.get("/", productController.getAllUsers);

module.exports = router;