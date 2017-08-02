const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: String,
    name: {
        type: String,
        min: [1, 'Name must be more than 1 letter.'],
        required: true,
    },
    testAnswers: [{
        type: Schema.ObjectId,
        ref: 'Category',
        required: true,
        min: [1, 'Must have >= 1 Category.'],
    }],
});

module.exports = mongoose.model('User', userSchema);
