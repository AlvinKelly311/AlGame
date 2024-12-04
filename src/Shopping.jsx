import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import { ShopCart } from './Contextapi';

const Shopping = () => {
    const [shop, setShop] = useState([]);
    const [error, setError] = useState(null);
    const [load, setLoad] = useState(false);
    const BASE_URL = 'http://localhost:3000';
    const { handleAddToCart } = useContext(ShopCart);

    useEffect(() => {
        const fetchShop = async () => {
            setLoad(true);
            try {
                const response = await axios.get(`${BASE_URL}/product`);
                setShop(response.data);
            } catch (err) {
                setError('Error fetching items, please come back later');
            } finally {
                setLoad(false);
            }
        };
        fetchShop();
    }, []);

    return (
        <div className="relative top-[13rem] flex flex-col justify-between items-center gap-8">
            <h1 className="text-center font-black uppercase tracking-[30px] text-4xl italic font-mono">
                Algame🎮 Product
            </h1>
            <hr />
            <div className="grid grid-cols -1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                {load ? (
                    <p>Loading Items...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : shop.length > 0 ? (
                    shop.map((product) => (
                        <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
                    ))
                ) : (
                    <p>No items found.</p>
                )}
            </div>
        </div>
    );
};

export default Shopping;