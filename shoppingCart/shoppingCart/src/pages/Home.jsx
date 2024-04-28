import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";


const Home = () => {
    
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState();
    const [posts, setPost] = useState([]);


    async function fetchProductData() {
        setLoading(true);

        try {
            const result = await fetch(API_URL);
            const data = await result.json();

            setPost(data);
        } catch (error) {
            console.log("Caught error")
            setPost([])
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchProductData();
    },[])

    return (
        <div>
            {
                loading ? <Spinner /> :
                    posts.length > 0 ?
                        (<div>
                            {posts.map((post) => {
                                return <Product key={post.id} post={post} />;
                            })
                            }
                        </div>) :
                        <div>
                            <p>No data found</p>
                        </div>
            }
        </div>
    )
};

export default Home;
