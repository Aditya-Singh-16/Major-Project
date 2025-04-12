import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; 
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Login from "./components/Login";  
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();

  // Loading state while authUser is being set
  if (authUser === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Course Route, Protected */}
        <Route
          path="/course"
          element={authUser && authUser.user ? <Courses /> : <Navigate to="/login" />} // Navigate to login if not authenticated
        />

        {/* Signup Route */}
        <Route path="/signup" element={<Signup />} />

        {/* Login Route (Optional) */}
        <Route path="/login" element={<Login />} /> 

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}

export default App;
