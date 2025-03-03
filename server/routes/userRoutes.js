import express from 'express'
import { registerUser, loginUser, userCredits, paymentRazorPay, verifyRazorpay } from "../controllers/userControllers.js";
import userAuth from '../middlewares/auth.js';


const userRouter = express.Router()


userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.get('/credits',userAuth, userCredits)
userRouter.post('/pay-razor',userAuth,paymentRazorPay )
userRouter.post('/verify-razor',verifyRazorpay )

// https://clipdrop-api.co/text-to-image/v1


export  default userRouter
