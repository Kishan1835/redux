import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className='flex flex-roe justify-between'>
        <NavLink to="/">
          <img src="https://avatars.githubusercontent.com/u/117018000?v=4?s=400" alt="" />
        </NavLink>

        <div>
          <NavLink to='/'>
            <p>Home</p>
          </NavLink>

          <NavLink to='/cart'>
            <div>
              <p><FaShoppingCart /></p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar