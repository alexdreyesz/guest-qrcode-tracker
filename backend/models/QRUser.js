const mongoose = require('mongoose');

const qrUserSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    country: { type: String, required: true },
    university: { type: String, required: true },
    package: { type: String, required: true },
    qrid: { type: String, required: true, unique: true }  
});

module.exports = mongoose.model('users', qrUserSchema);