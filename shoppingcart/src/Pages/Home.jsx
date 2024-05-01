import { useEffect, useState } from "react";
import  Spinner  from '../Components/Spinner'
import Product from '../Components/Product'

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";

    const [loading, setLoding] = useState(false)
    const [posts, setPosts] = useState([])

    async function fetchProductData() {
        setLoding(true)

        try {
            const res = await fetch(API_URL)
            const data = await res.json()

            setPosts(data);
        } catch (error) {
            console.log("No data founf")
            setPosts([])
        }
        setLoding(false)
    }

    useEffect(() => {
        fetchProductData();
    }, []);


    return (
        <div>
            {
                loading ? <Spinner /> :
                    posts.length > 0 ?
                        (
                            <div>
                                {
                                    posts.map((post) => {
                                        return <Product key={post.id} post={post} />;
                                    })
                                }
                            </div>
                        ) :
                        <div>
                            <p>No Data Found</p>
                        </div>
            }
       </div>
   )
};

export default Home;
