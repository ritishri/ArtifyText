# ArtifyText
This project is a text-to-image generation website that allows users to generate AI-powered images from text prompts using Clipdrop. Built with the MERN stack for the backend and React.js (Vite) with Tailwind CSS for the frontend, the platform provides a seamless and user-friendly experience. For payments, Razorpay is integrated, while Framer Motion enhances the UI with smooth animations.

# 🔑 Features
AI-powered image generation using Clipdrop API
Credit-based system (5 free credits, 1 credit per image)
Flexible credit purchase plans
Secure payments with Razorpay
Modern UI with Tailwind CSS
Smooth animations with Framer Motion

# 📌 Tech Stack

# Frontend
React.js (Vite)
Tailwind CSS
Framer Motion (for animations)

# Backend
MongoDB
Express.js
Node.js

# Payments
  Razorpay API

# 💡 How It Works
Users register and get 5 free credits.
Each image generation costs 1 credit.
Once credits run out, users can purchase more credits via Razorpay.
The website uses Clipdrop API to generate images based on user prompts.

# 🔑 Installation
Clone the repository.
git clone [https://github.com/ritishri/ArtifyText]

# Install dependencies
cd client
npm install
cd server
npm install

# Environment Variables

# Frontend(.env)
VITE_BACKEND_URL = "backend_url"
VITE_RAZORPAY_KEY_ID = "your_razorpay_key"

# Backend(.env)
JWT_SECRET = "your_jwt_secret"
CLIPDROP_API = "your_clipdrop_api"
RAZORPAY_KEY_ID = "your_razorpay_key"
RAZORPAY_KEY_SECRET = "your_razorpay_secret"
CURRENCY = "INR"

# Run the frontend and backend
cd client
npm run dev
cd server
npm start
