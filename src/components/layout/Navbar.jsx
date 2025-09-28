import { Link, useNavigate } from "react-router-dom";
import { LogOut, User } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/AuthSlice";
import { useState } from "react";

export default function Navbar() {

  const { role, firstName } = useSelector((state) => state.auth);
  console.log("user Navbar", firstName)
  const navigate = useNavigate()
  const dispatch = useDispatch();
  console.log("navbar", role);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login")
  };

  return (
    <nav className="bg-white border-b border-gray-200 ">
      <div className=" sm:px-6 lg:px-4">
        <div className="flex justify-between items-center h-16">
          <div>
            <p className="font-bold text-2xl">Pharma Sales</p>
          </div>

          {role ? (
            <div className="flex items-center">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <p className="mr-10">{firstName}</p>
              </div>
              <button
                onClick={handleLogout}
                className="flex px-4 py-2 cursor-pointer border text-sm border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <LogOut className="h-4 w-4 mr-2 mt-0.5" />
                Logout
              </button>
            </div>
          ) : (
            <div>
              <button
                onClick={()=> {navigate("/")}}
                className="px-4 py-2 cursor-pointer border text-sm border-gray-200 rounded-lg hover:bg-gray-50"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
