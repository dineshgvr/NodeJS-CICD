const express = require("express");
const router = express.Router();

const RestaurantController = require("../controller/restaurantsController");

router.get('/', RestaurantController.getAllRestaurants);

module.exports = router;