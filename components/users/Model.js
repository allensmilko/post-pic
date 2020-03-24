const mongoose = require('mongoose');
const { AVATAR_DEFAULT } = process.env;

const userSchema = new mongoose.Schema({
    user_name: { type: String, required: true },
    description: { type : String },
    avatar: { type: String, default: AVATAR_DEFAULT },
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId, fer: 'User'
        }
    ]
})

module.exports.User = userSchema;