import React from 'react'
import {NavLink} from 'react-router'
import { useAuth } from '../store/authStore';

function Header() {
  const {isAuthenticated}=useAuth((state)=>state)
  return (
    <div className="bg-blue-500 p-3">
      <ul className="flex justify-end gap-4 text-2xl text-white pr-3 ">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Register">Register</NavLink>
        </li>
        {isAuthenticated===true?
        (<li>
          <NavLink to="/Login">Logout</NavLink>
        </li>):
        (<li>
          <NavLink to="/Login">Login</NavLink>
        </li>)}
      </ul>
    </div>
  );
}

export default Header