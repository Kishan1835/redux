import PropTypes from 'prop-types';
import { useDispatch } from 'react-dom'
import { MdDeleteOutline } from "react-icons/md";
import { remove } from '../redux/Slice/CartSlice';
import { toast } from 'react-toastify';


const CartItem = ({ item, itemIndex }) => {

    const dispatch = useDispatch();
    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.success("Item Removed");
    }

    CartItem.propTypes = {
        item: PropTypes.shape({
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,


        }).isRequired,
    };

    return (
        <div>
            <div>
                <div>
                    <img src={item.image} />
                </div>
                <div>
                    <h1>{item.title}</h1>
                    <h1>{item.description}</h1>
                </div>
                <div>
                    <p>{item.price}</p>
                    <div
                        onClick={removeFromCart}>
                        <MdDeleteOutline />
                    </div>
                </div>

            </div>
        </div>
    );
};





export default CartItem