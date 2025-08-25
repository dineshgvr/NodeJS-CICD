const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment')

const AddressSchema = new mongoose.Schema({
    state: { required: true, type: String, default: '' },
    city: { type: String, default: '', required: true },
});

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: false},
    lastName: { type: String, required: false},
    age: {
        type: Number,
        min: 10,
        max: 90
    },
    address: AddressSchema
});

autoIncrement.initialize(mongoose.connection);

// UserSchema.plugin(autoIncrement.plugin, {
//     model: 'UserSchema',
//     field: 'userId',
//     startAt: 1,
// })

module.exports = mongoose.model('User', UserSchema)

