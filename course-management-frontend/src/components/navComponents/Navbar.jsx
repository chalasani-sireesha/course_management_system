import React, { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { UserProvider } from "../../context/UserContext";
import { CourseProvider } from "../../context/CourseContext";

const Navbar = () => {
  let { user , logout } = useContext(UserProvider);
  const { cart } = useContext(CourseProvider);
  console.log(user); // null //{}

  

  const links = [
    { name: "Courses", path: "/" },
    { name: "Cart", path: "/cart" },
    { name: "Add Course", path: "/addcourse" },
  ];

  return (
    <div className="flex items-center gap-6">
      <NavLink to="/" className={({isActive})=>isActive?'text-amber-600':'text-blue-400'}>Courses</NavLink>
     
      {user?.role == "user" && (
  <Link to="/cart">
    Cart ({cart.length})
  </Link>
)}
      {user?.role == "admin" && <NavLink className={({isActive})=>isActive?'text-amber-600':'text-blue-400'} to="/addcourse">Add Course</NavLink>}
      <div className="ml-3 h-6 w-px bg-slate-200" />

      {user? <button  className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-blue-200 transition-all duration-200 hover:bg-orange-700 hover:shadow-md" onClick={logout}>
        Logout
      </button>: <Link
        to="/login"
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-blue-200 transition-all duration-200 hover:bg-blue-700 hover:shadow-md"
      >
        Login
      </Link> }


     
     
      {user && (
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-blue-200 transition-all duration-200 hover:bg-blue-700 hover:shadow-md">
          {user?.username.charAt(0)}
        </button>
      )}
    </div>
  );
};

export default Navbar;
