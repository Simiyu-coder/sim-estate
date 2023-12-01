import User from '../models/user.model.js'

export const signup = async (req, res ) => {
    const {username, email, password} = req.body;
    const newUser = new User ({username, email, password });
    try {
        await newUser.save();
        res.status(201).json('User Created Successfully'); 
    } catch (error) {
        console.log(error.message);
    }
}