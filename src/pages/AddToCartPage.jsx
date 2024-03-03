import React, { useState } from 'react';

const AddToCartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Create a new item object with the current quantity
    const newItem = {
      id: cartItems.length + 1, // Generate a unique ID (replace with your logic)
      name: "Product", // Replace with the actual product name
      quantity: quantity
    };

    // Add the new item to the cart
    setCartItems([...cartItems, newItem]);

    // Optionally, you can reset the quantity after adding to cart
    setQuantity(1);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Add to Cart</h2>
      <div className="flex items-center mb-4">
        <label htmlFor="quantity" className="mr-2">Quantity:</label>
        <input
          id="quantity"
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          className="border border-gray-300 px-2 py-1 rounded-md"
        />
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Add to Cart
      </button>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="mb-2">
              {item.name} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddToCartPage;
