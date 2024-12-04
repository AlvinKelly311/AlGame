import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
    const { image, price, description, productName } = product;
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        if (quantity > 0) {
            const productWithQuantity = { ...product, quantity };
            onAddToCart(productWithQuantity);
            setQuantity(1); // Reset quantity after adding to cart
            navigate('/ShoppingCart'); // Navigate to cart page
        }
    };

    return (
        <div className="flex flex-col gap-4 p-4 border border-gray-300 rounded-lg shadow-md">
            <h2 className="font-black uppercase tracking-wider text-center text-xl">{productName}</h2>
            <div className="flex justify-center">
                <img
                    src={image}
                    alt={productName}
                    className="w-[250px] h-[250px] object-cover border rounded"
                />
            </div>
            <p className="text-gray-700 text-sm text-center h-[60px] overflow-hidden">
                {description}
            </p>
            <p className="font-bold text-lg text-center">${price.toFixed(2)}</p>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                    <button
                        onClick={decreaseQuantity}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        -
                    </button>
                    <span className="text-lg">{quantity}</span>
                    <button
                        onClick={increaseQuantity}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                        +
                    </button>
                </div>
                <button
                    onClick={handleAddToCart}
                    className="bg-blue-500 text-white px-6 py-2 font-bold rounded hover:bg-blue-600 w-full sm:w-auto"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;