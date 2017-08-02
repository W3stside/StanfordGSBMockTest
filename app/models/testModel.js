const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = new Schema({
    _id: String,
    testAnswers: {
        type: Array,
        required: true
    },
});

module.exports = mongoose.model('Test', testSchema);
