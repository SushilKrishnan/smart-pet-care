const mongoose = require('mongoose');

const visitSchema = new mongoose.Schema({
    visitId: String,
    ownerId: String,
    petName: String,
    service: String,
    visitTime: String,
    status: String
});

module.exports = mongoose.model('Visit', visitSchema);