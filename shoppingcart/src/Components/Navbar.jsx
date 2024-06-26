import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import logo from './logo-removebg-preview.png'
import { useSelector } from "react-redux";

const Navbar = () => {

  const { cart } = useSelector((state) => state);
  return (
    <div>
      <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto '>
        <NavLink to="/">
          <div className="ml-5">
            <img src={logo} alt="logo" className="h-14" />
          </div>

        </NavLink>

        <div className="flex itms-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to='/'>
            <p>Home</p>
          </NavLink>

          <NavLink to='/cart'>
            <div className="relative ">
              <p><FaShoppingCart className="text-2xl" /></p>
              {
                cart.length > 0 &&
                <span className="absolute -top-1 -right-3 bg-green-600 text-xs w-5 h-5 flex
                justify-center animate-bounce rounded-full text-white"
                >{cart.length}</span>

              }
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar