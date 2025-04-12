import React from "react";
import { useAuth } from "../context/AuthProvider"; // Corrected path to AuthProvider
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      setAuthUser({ ...authUser, user: null }); // Reset user data
      localStorage.removeItem("Users"); // Remove user data from localStorage
      toast.success("Logged out successfully");

      setTimeout(() => {
        navigate("/login"); // Redirect to login page
      }, 2000);
    } catch (error) {
      toast.error("Logout failed: " + error.message); // Handle errors gracefully
    }
  };

  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
