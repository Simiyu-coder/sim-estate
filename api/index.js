import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import userRouter from './routes/user.route.js'

const app = express ();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to the Database')
}).catch((err)=>{
    console.log(err)
});

app.listen(3000, () => {
    console.log('Server is Running')
})

app.use('/api/user',userRouter);