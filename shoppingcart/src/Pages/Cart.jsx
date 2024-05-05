import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartItem from '../Components/CartItem';

export const Cart = () => {


  const cart = useSelector(state => state.cart);
  console.log("printing cart data ")
  console.log(cart)

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {

    if (cart && cart.length > 0) {
      const newTotalAmount = cart.reduce((acc, curr) => acc + curr.price, 0);
      setTotalAmount(newTotalAmount);
    } else {
      setTotalAmount(0);
    }
  }, [cart]);

  return (
    <div className='flex  justify-evenly   '  >
      {cart && cart.length > 0 ? (
        <div className=' flex justify-evenly items-center gap-x-10'>
          <div  >
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>


          <div >
            <div   >
              <div className='text-green-600 font-semibold '>Your Cart</div>
              <div className='text-green-600 font-semibold text-4xl mb-4'>Summary</div>
              <p>
                <span className='font-semibold'> Total Items: {cart.length}</span>
              </p>
            </div>
          </div>

          <div className='flex flex-col gap-y-10'>
            <p className='font-bold'>Total Amount: {totalAmount}</p>
            <NavLink to='/'>
              <button
                className='text-gray-700 border-8 boreder-gray-700 rounded-full font-semibold
                                text-[12px] p-1 px-2 uppercase
                                hover:bg-gray-700 hover:text-white
                                transition duration-300 ease-in'>Checkout Now</button>

            </NavLink>

          </div>
        </div>
      ) : (
        <div>
          <h1>Cart Empty</h1>
          <NavLink to="/">
            <button>Shop Now</button>
          </NavLink>
        </div>
      )

      }
    </div>
  );
};

export default Cart;
