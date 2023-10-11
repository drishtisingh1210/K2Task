import React from "react";

const CartItem = ({ product, deleteCartItems }) => {
  return (
    <div className="mt-5 ml-10 w-1/2">
      {" "}
      {/* Add w-1/2 class for half width */}
      <div className="border p-4 shadow-md">
        {" "}
        {/* Add shadow-md class for shadow */}
        <div className="flex items-center">
          <img
            src={
              product.image
                ? `http://localhost:3001/${product.image}`
                : "/images/furniture.jpg"
            }
            alt={product.name}
            className="w-16 h-16 mr-4 rounded-full"
          />
          <div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">Description: {product.description}</p>
            <p className="text-gray-600">Total Price: ${product.price}</p>
            {/* <p className="text-gray-600">Tax: $100.15</p>
                <p className="text-gray-600">Shipping Charge: $80</p> */}
            {/* <p className="text-gray-600">Total amount:  </p> */}
            {/* Add more product details here */}
          </div>
        </div>
        <div className="flex items-end justify-end">
          <button
            onClick={() => deleteCartItems(product.product)}
            className="text-red-400 hover:text-red-800 "
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
