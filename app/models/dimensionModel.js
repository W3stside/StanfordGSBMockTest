const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dimensionSchema = new Schema({
    _id: String,
    name: String,
    answers: {
        type: Array,
        required: true
    },
});

module.exports = mongoose.model('Dimension', dimensionSchema);
