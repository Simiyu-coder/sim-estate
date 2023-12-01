import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: True,
        required:True,
    },
    email: {
        type: String,
        unique: True,
        required:True,
    },
    password: {
        type: String,
        required:True,
    },
},{timestamp: true})

const User =  mongoose.model('User', userSchema);

export default User