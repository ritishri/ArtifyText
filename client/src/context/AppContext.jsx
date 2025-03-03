import { createContext, useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext()

const AppContextProvider = (props) =>{

    const [user, setUser] = useState(null)
    const [showLogin, setShowLogin] = useState(false)
    const [token, setToken] = useState(localStorage.getItem('token'))
    // if token available in browser localstorage that will be stored in token state variable

    const [credit, setCredit] = useState(0)

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const navigate = useNavigate()


    const loadCreditData = async () =>{
        try {
            
            const {data} = await axios.get(backendUrl + '/api/user/credits',{headers: {token }})

            if(data.success){
                setCredit(data.credits)
                // setUser(data.user)
                setUser((prev) => ({ ...prev, creditBalance: data.credits }));
            }


        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(()=>{
      if(token){
        loadCreditData()
      }
    },[token])


    const generateImage = async(prompt) =>{

        try {
            
            const {data} = await axios.post(backendUrl + '/api/image/generate-image',{prompt},{headers:{token}})

            if(data.success){
                loadCreditData()
                return data.resultImage
            }else{
                toast.error(data.message)
                loadCreditData()

                if(data.creditBalance === 0){
                    navigate('/buy')
                }
            }


        } catch (error) {
            toast.error(error.message)
        }
    }


     


    const logout = () =>{
        localStorage.removeItem('token')
        setToken('')
        setUser(null)
    }

    const value = {
        user, setUser,
        showLogin,setShowLogin,
        backendUrl,token,
        setToken, credit, setCredit,
        loadCreditData, logout,
        generateImage
    }

    return (
        <AppContext.Provider value={value}>

            {props.children}

        </AppContext.Provider>
    )
}

export default AppContextProvider



// AppContextProvider is a React Context Provider component that wraps parts of your application and provides a global state (in this case, user and setUser) to all its child components.