// backend/db.js
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://rahul:hDzJYkAenZIbyQLR@cluster0.qkwlpub.mongodb.net/");

// Create a Schema for Users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    gender: {
        type: String,
        required: true,
        trim: true,
        maxLength: 10
    },
    no_of_posts: {
        type: Number,
        default: 0,
    }
});

const postsSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    posts: {
        type: String,
    }
})

// const accountSchema = new mongoose.Schema({
// userId: {
//     type: mongoose.Schema.Types.ObjectId, // Reference to User model
//     ref: 'User',
//     required: true
// },
//     balance: {
//         type: Number,
//         required: true
//     }
// });

// const Account = mongoose.model('Account', accountSchema);
const User = mongoose.model('User', userSchema);
const Posts = mongoose.model('Posts', postsSchema);

module.exports = {
    User,
    Posts
};