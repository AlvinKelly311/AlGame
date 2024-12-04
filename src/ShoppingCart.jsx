import React, { useEffect, useState } from 'react';
import { PaystackButton } from 'react-paystack';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartitems')) || [];
    setCartItems(storedCartItems);
    calculateTotal(storedCartItems);
  }, []);

  const calculateTotal = (items) => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalAmount(total);
  };

  const handleRemove = (productId) => {
    const newCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(newCartItems);
    localStorage.setItem('cartitems', JSON.stringify(newCartItems));
    calculateTotal(newCartItems); // Recalculate total after removal
  };

  // Paystack configuration
  const publicKey = 'pk_test_839b80808fbf80afbf27f14c860c6f1fce7c6a7c'; // Replace with your Paystack public key
  const componentProps = {
    email: 'alvinkelly788@gmail.com', // Replace with the customer's email
    amount: totalAmount * 100, // Amount in kobo (1 Naira = 100 Kobo)
    publicKey,
    text: "Pay Now", // Button text
    onSuccess: (reference) => {
      console.log(reference);
      alert('Payment Successful!');
      // Clear the cart after successful payment
      localStorage.removeItem('cartitems');
      setCartItems([]);
      setTotalAmount(0);
    },
    onClose: () => {
      alert('Payment was closed.');
    },
  };

  return (
    <div className='relative top-[13rem]'>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-col gap-4 p-4 border border-gray-300 rounded-lg shadow-md">
              <h2 className="font-black uppercase tracking-wider text-center text-xl">{item.productName}</h2>
              <img src={item.image} alt={item.productName} className="w-80 object-cover" />
              <p className="text-gray-700 text-sm">{item.description}</p>
              <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
              <p className="text-sm text-center">Quantity: {item.quantity}</p>
              <div className="button-group mt-4">
                <button onClick={() => handleRemove(item.id)} className="bg-red-500 text-white py-1 px-3 rounded">
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <h2 className="font-bold text-lg">Total Amount: ${totalAmount.toFixed(2)}</h2>
            <PaystackButton {...componentProps} className="bg-green-500 text-white py-2 px-4 rounded" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
