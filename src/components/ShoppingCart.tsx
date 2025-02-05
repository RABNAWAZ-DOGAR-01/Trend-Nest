"use client";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useShoppingCart } from "use-shopping-cart";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth, SignInButton } from "@clerk/nextjs";


export function ShoppingCart() {
  const {
    cartCount = 0,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    setItemQuantity,
  } = useShoppingCart();

  const { isSignedIn } = useAuth();

  async function handleCheckout() {
    if (cartCount === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    try {
      const products = Object.values(cartDetails ?? {});

      const response = await fetch("/api/Checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ products }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("Stripe session error:", data.error);
        toast.error("Failed to initiate checkout.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Something went wrong during checkout.");
    }
  }

  return (
    <>
      <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
        <SheetContent className="sm:max-w-lg w-[90vw]">
          <SheetHeader>
            <SheetTitle>Shopping Cart</SheetTitle>
          </SheetHeader>

          <div className="h-full flex flex-col justify-between">
            <div className="mt-8 flex-1 overflow-y-auto">
              <ul className="-my-6 divide-y divide-gray-200">
                {cartCount === 0 ? (
                  <h1 className="text-3xl py-6">Cart is empty</h1>
                ) : (
                  Object.values(cartDetails ?? {}).map((entry) => (
                    <li key={entry.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={entry.image as string}
                          alt={entry.name}
                          width={96}
                          height={96}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="ml-4 flex flex-col flex-1">
                        <div>
                          <div className="flex justify-between text-base font-semibold text-gray-900">
                            <h3>{entry.name}</h3>
                            <p>Rs {entry.price}</p>
                          </div>
                          <p className="mt-1 pr-7 text-sm text-gray-500 line-clamp-2">
                            {entry.description}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="flex items-center">
                            <button
                              className="text-gray-500 font-bold px-2"
                              onClick={() =>
                                setItemQuantity(entry.id, entry.quantity - 1)
                              }
                            >
                              -
                            </button>
                            <p className="text-gray-500 mx-2">
                              {entry.quantity}
                            </p>
                            <button
                              className="text-gray-500 font-bold px-2"
                              onClick={() =>
                                setItemQuantity(entry.id, entry.quantity + 1)
                              }
                            >
                              +
                            </button>
                          </div>
                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium text-red-500 hover:text-primary/80"
                              onClick={() => removeItem(entry.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))
                )}
              </ul>
            </div>

            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal:</p>
                <p>Rs {totalPrice}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping is calculated at checkout
              </p>

              {cartCount > 0 && (
                <div className="mt-6">
                  {!isSignedIn ? (
                    <SignInButton mode="redirect">
                      <button className="bg-slate-700 hover:bg-slate-900 text-white py-4 mt-8 sm:mt-4  xxs:px-5">
                        Sign in to Checkout
                      </button>
                    </SignInButton>
                  ) : (
               <button
                      onClick={handleCheckout}
                      className="bg-green-600 hover:bg-green-800 text-white py-4 mt-8 sm:mt-4 px-5"
                    >
               Proceed to Payment
                    </button>
                 
                  )}
                </div>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <ToastContainer />
    </>
  );
}
