import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { remove } from '../redux/Slice/CartSlice';


const CartItem = ({ item }) => {


  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id))
    toast.error("Item removed")
  }
  return (
    <div>

      <div className="flex flex-col items-center justify-evenly gap-3 p-4 mt-10 ml-5 rounded-xl outline">

        <div className="h-[180px]">
          <img src={item.image} alt="" className="h-full " />
        </div>

        <div>
          <h1 className='text-gray-700 font-semibold text-lg lext-left truncat w-40 mt-1'>{item.title && item.title.split(" ").slice(0, 4).join(" ") + "..."}</h1>
          <h1 className='w-70 text-gray-400 font-normal
                text-[15px] text-left '>{item.description && item.description.split(" ").slice(0, 7).join(" ") + "..."}</h1>

          <div className='flex justify-evenly gap-11 items-center w-full  mt-5'>
            <p className='text-green-600 font-semibold '>${item.price}</p>
            <div>
              <MdDelete
                onClick={removeFromCart}
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default CartItem