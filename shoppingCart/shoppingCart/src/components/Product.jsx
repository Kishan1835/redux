import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-router'
import { remove, add } from '../redux/Slice/CartSlice';
import { toast } from 'react-toastify';


const Product = ({ item }) => {

    Product.propTypes = {
        item: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,

        }).isRequired,
    };

    const { cart } = useSelector((state) => state)
    const dispatch = useDispatch();

    const AddToCart = () => {
        dispatch(add(item));
        toast.success("Item added To Cart")
    }

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.success("Removed From Cart")
    }



    return (
        <div>
            <div>
                <p>{item.title}</p>
            </div>

            <div>
                <p>{item.description}</p>
            </div>

            <div>
                <img src={item.image} alt="" />
            </div>

            <div>
                <p>{item.price}</p>
            </div>

            {
                cart.some((p) => p.id == item.id) ?
                    (<button
                        onClick={removeFromCart}>
                        Remove Item
                    </button>) :
                    (<button
                        onClick={AddToCart}>
                        Add to Cart
                    </button>)
            }

        </div>
    );
};





export default Product