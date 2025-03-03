import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import axios from 'axios'
import { toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState("Login");
  const { user,showLogin, setShowLogin , backendUrl, setToken, setUser } = useContext(AppContext);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    // Disable scrolling when login page is visible
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);


  const onSubmitHandler = async(e) =>{
    e.preventDefault()

    try {
      
      if(state === 'Login'){
        const {data} = await axios.post(backendUrl + '/api/user/login',{email,password})

        if(data.success){
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token',data.token)
          setShowLogin(false)
        }else{
          toast.error(data.message)
        }

      }else{
        const {data} = await axios.post(backendUrl + '/api/user/register',{name,email,password})

        if(data.success){
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token',data.token)
          setShowLogin(false)
          
        }else{
          toast.error(data.message)
        }
      }


    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <motion.form
        onSubmit={onSubmitHandler}
        className="relative bg-white p-10 rounded-xl text-slate-500"
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h1 className="text-center text-2xl text-black font-medium">{state}</h1>
        <p className="text-sm">Welcome back! Please sign in to continue</p>

        {state != "Login" && (
          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
            <img width={20} src={assets.profile_icon} alt="" />
            <input
              onChange={e => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Full Name"
              required
              className="ouline-none text-sm p-1"
            />
          </div>
        )}

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
          <img width={20} src={assets.email_icon} alt="" />
          <input
            onChange={e => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email id"
            required
            className="ouline-none text-sm p-1"
          />
        </div>

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img width={10} src={assets.lock_icon} alt="" />
          <input
            onChange={e => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            required
            className="ouline-none text-sm p-1"
          />
        </div>

        <p className="text-sm text-black my-4 cursor-pointer">
          Forgot Password?
        </p>
        <button className="bg-black w-full text-white py-2 rounded-full">
          {state === "Login" ? "login" : "Create Account"}
        </button>

        {state === "Login" ? (
          <p className="mt-5 text-center">
            Don't have an account?
            <span
              className="text-black cursor-pointer"
              onClick={() => setState("Sign Up")}
            >
              {" "}
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account?
            <span
              className="text-black cursor-pointer"
              onClick={() => setState("Login")}
            >
              {" "}
              Login
            </span>
          </p>
        )}

        <img
          onClick={() => setShowLogin(false)}
          className="absolute top-5 right-5 cursor-pointer"
          src={assets.cross_icon}
          alt=""
        />
      </motion.form>
    </div>
  );
};

export default Login;
