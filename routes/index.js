const express = require('express');
const router = express.Router();
const userRoutes = require('./userRouter');
const productRoutes = require('./productRouter');
const restaurantRoutes = require('./restaurantsRouter');

router.use("/users", userRoutes)
router.use("/products", productRoutes);
router.use('/restaurant', restaurantRoutes);

module.exports = router;