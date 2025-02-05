'use client';


import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  quantity: number;
  id: string;
  sku: string;
  price_id: string;
}

export default function AddToCart({
  currency,
  description,
  name,
  price,
  quantity,
  id,
  image,
  price_id,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    currency: currency,
    description: description,
    image: image,
    name: name,
    price: price,
    quantity: quantity,
    id: id,
    price_id: price_id,
  };

  const handleAddToCart = () => {
    addItem(product); // Add item to cart
    handleCartClick(); // Open the cart
    toast.success(`${name}Added to cart successfully!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
  };



  return (
    <div>
      <Button
        onClick={handleAddToCart}
        className="w-36 h-10 -mt-16 -sm:mt-8 rounded-md hover:bg-blue-200 hover:text-white bg-[#23A6F0] text-white"
      >
        Add to cart
      </Button>

      {/* Toast Container for Notifications */}
      
    </div>
  );
} 