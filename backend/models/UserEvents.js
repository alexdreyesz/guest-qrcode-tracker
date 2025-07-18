const mongoose = require('mongoose');

const userEventSchema = new mongoose.Schema({
    userID: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    events: [
        {
            date: { type: String, required: true },
            event: [
                {
                    name: { type: String, required: true }, 
                    scanned: { type: Boolean, default: false } 
                }
            ]
        } 
    ]
});

module.exports = mongoose.model('userevents', userEventSchema);