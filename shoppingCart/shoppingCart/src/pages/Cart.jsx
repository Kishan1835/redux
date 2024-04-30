import { useEffect, useState } from 'react'
import { useSelector } from 'react-router'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'; // Import the CartItem component

const cart = () => {

  const Cart = () => {

    const { cart } = useSelector((state) => state)
    const [totalAmount, setToatlAmount] = useState(0);

    useEffect(() => {
      setToatlAmount(cart.reduce((acc, curr) => acc + curr.price, 0))
    }, [cart])

    return (
      <div>
        {
          cart.length > 0 ?
            (<div>

              <div>
                {
                  cart.map((item, index) => {
                    return <CartItem key={item.id} item={item} itemIndex={index} />
                  })
                }
              </div>

              <div>
                <div>
                  <div>Your Cart</div>
                  <div>Summary</div>
                  <p>
                    <span>Total Items : {cart.length}</span>
                  </p>
                </div>

                <div>
                  <p>Total Amount : ${totalAmount}</p>
                  <button>CheckOut Now</button>
                </div>

              </div>

            </div>
            ) :

            (<div>
              <h1>Cart Empty </h1>
              <Link to={"/"}>
                <button>
                  shop Now
                </button>
              </Link>
            </div>
            )
        }
      </div>
    )
  }


  return (
    <div>
      {
        cart.length > 0 ?
          (<div>

            <div>
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }
            </div>

            <div>
              <div>
                <div>Your Cart</div>
                <div>Summary</div>
                <p>
                  <span>Total Items : {cart.length}</span>
                </p>
              </div>

              <div>
                <p>Total Amount : ${totalAmount}</p>
              </div>

            </div>

          </div>
          ) :

          (<div>
            <h1>Cart Empty </h1>
            <Link to={"/"}>
              <button>
                shop Now
              </button>
            </Link>
          </div>
          )
      }
    </div>
  )
}

export default cart