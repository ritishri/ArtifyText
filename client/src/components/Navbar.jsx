import { useContext, useState } from "react";
import logo from "../../public/artifyLogo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { AppContext } from "../context/AppContext.jsx";

const Navbar = () => {
  const navigate = useNavigate();

  const {user, setShowLogin, logout, credit } = useContext(AppContext)

  console.log(credit)

  return (
    <div className="flex items-center justify-between py-4">
      <Link to="/">
        <img src={logo} alt="ArtifyText Logo" className="h-16 w-auto " />
      </Link>

      <div>
        {user ? (
          // User loggedIn
          <div className="flex text-center gap-2 sm:gap-3">
            <button onClick={()=> navigate('/buy')} className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 s:py-3 rounded-full hover:scale-105 transition-all duration-700" >
              <img className="w-5" src={assets.credit_star} />
              <p className="text-xs sm:text-sm font-medium text-gray-600">Credit left: {credit}</p>
            </button>

            <p className="text-gray-600 max-sm:hidden pl-4">{user.name}</p>

            <div className="relative group cursor-pointer">
              <img src={assets.profile_icon} className="w-10 drop-shadow" />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                <ul className="list-none m-0 p-2 text-sm">
                  <li onClick={logout} className="bg-zinc-800 text-white px-10 py-2 tex-sm rounded-full">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          // User loggedOut
          <div className="flex flex-row items-center gap-2 sm:gap-5">
            <p onClick={() => navigate("/buy")} className="cursor-pointer">
              Pricing
            </p>
            <button onClick={()=>setShowLogin(true)} className="bg-zinc-800 text-white px-10 py-2 tex-sm rounded-full">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
