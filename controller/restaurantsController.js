const mongoose= require('mongoose');
const Restaurant = require('../models/restaurant');

exports.getAllRestaurants = async (req, res) => {
    let page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 5;
    let skip = (page - 1) * limit;

    console.log(req.query);

    const sortField = req.query.sort || null;
    const sortOrder = req.query.direction || "";

    let pipeline = [
        {
            $project: {
                _id: 0,
                street: "$address.street",
                zipcode: "$address.zipcode",
                borough: 1,
                cuisine: 1,
                name: 1,
                restaurant_id: 1
            },
        },
    ];

    // Sorting
    if (sortField && sortOrder === "asc") {
        pipeline.push({ $sort: { [sortField]: 1 } });
    } else if (sortField && sortOrder === "desc") {
        pipeline.push({ $sort: { [sortField]: -1 } });
    }

    pipeline.push(
        { $skip: skip } ,
        { $limit: limit }
    );

    let result = await Restaurant.aggregate(pipeline);

    const count = await Restaurant.countDocuments();
    res.json({data: result, count: count});
}