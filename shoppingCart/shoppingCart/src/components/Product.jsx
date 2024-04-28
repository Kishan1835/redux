import PropTypes from 'prop-types';
const Product = ({ post }) => {
    Product.propTypes = {
        post: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired, // Add this line
        }).isRequired,
    };

    return (
        <div>
            <div>
                <p>{post.title}</p>
            </div>

            <div>
                <p>{post.description}</p>
            </div>

            <div>
                <img src={post.image} alt="" />
            </div>

            <div>
                <p>{post.price}</p>
            </div>

            <button>
                {
                    true ? <p>Remove Item</p> : <p>Add to Cart</p>
                }
            </button>
        </div>
    );
};





export default Product