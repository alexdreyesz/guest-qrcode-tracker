const mongoose = require('mongoose');

const userEventSchema = new mongoose.Schema({
    userID: { type: String, require: true },
    events: [
        {
            date: { type: String, required: true },
            event: [
                {
                    name: { type: String, required: true }, 
                    scanned: { type: Boolean } 
                }
            ]
        } 
    ]
});

module.exports = mongoose.model('userevents', userEventSchema);