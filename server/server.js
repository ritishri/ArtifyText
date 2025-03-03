import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'


const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(cors())
app.get('/',(req,res)=>{
   res.send("API working")
})

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)


// Mongodb connection 
const mongoURL = 'mongodb://localhost:27017/artifyText'
mongoose.connect(mongoURL)
const db = mongoose.connection

db.on('connected',()=>{
    console.log('Connected to mongodb successfully');
    
})

db.on('error',(err)=>{
    console.error('MongoDb connection error: ',err)
})



app.listen(PORT,()=>{
    console.log("Server running on PORT " + PORT) ;
    
})