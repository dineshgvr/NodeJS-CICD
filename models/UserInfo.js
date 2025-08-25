const mongoose = require('mongoose');

const UserInfo = mongoose.Schema({
    userId: mongoose.Schema.ObjectId,
    city: String,
    state: String,
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    }
})



module.exports = mongoose.model('UserInfo', UserInfo);