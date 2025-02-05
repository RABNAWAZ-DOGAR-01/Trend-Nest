"use client";


// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Button } from "../button";
// import { ShoppingBag } from "lucide-react";
// import { useShoppingCart } from "use-shopping-cart";
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

// const links = [
//   { name: "home", href: "/" },
//   { name: "Men", href: "/Men" },
//   { name: "Women", href: "/Women" },
//   { name: "Teens", href: "/Teens" },
// ];

// export default function Navbar() {
//   const pathname = usePathname();
//   const { handleCartClick, cartCount = 0 } = useShoppingCart();

//   return (
//     <div className="flex justify-between items-center mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl border-b-2">
//       <Link href={"/"}>
//         <h1 className="md:text-4xl text-2xl font-bold">
//           Trand<span className="text-blue-500">Nest</span>
//         </h1>
//       </Link>

      // <nav className="hidden gap-12 lg:flex 2xl:ml-16">
      //   {links.map((link, idx) => (
      //     <div key={idx}>
      //       {pathname === link.href ? (
      //         <Link
      //           className="text-lg text-blue-500 font-semibold"
      //           href={link.href}
      //         >
      //           {link.name}
      //         </Link>
      //       ) : (
      //         <Link
      //           href={link.href}
      //           className="text-lg font-semibold text-gray-600 transition duration-300 hover:text-primary"
      //         >
      //           {link.name}
      //         </Link>
      //       )}
      //     </div>
      //   ))}
      // </nav>

//       <div className="flex gap-4 items-center">
//         {/* Shopping Cart Button with Badge */}
//         <div className="relative">
//           <Button
//             className="flex flex-col gap-y-1.5 h-12 w-12 sm:w-20 sm:h-18 md:w-24 md:h-20"
//             variant={"outline"}
//             onClick={() => handleCartClick()}
//           >
//             <ShoppingBag />
//             <span className="hidden text-xs font-semibold text-gray-600 sm:block">
//               Cart
//             </span>
//           </Button>
//           <span className="absolute top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
//             {cartCount}
//           </span>
//         </div>

//         {/* User Login/Signout Section */}
//         <div className="flex gap-4 items-center">
//           <SignedOut>
//             <SignInButton>
//               <Button className="px-8 py-5 bg-[#3b82f6]">Login</Button>
//             </SignInButton>
//           </SignedOut>

//           <SignedIn>
//             <UserButton />
//           </SignedIn>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../button";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const links = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Teens", href: "/Teens" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { handleCartClick, cartCount = 0 } = useShoppingCart();
  const [open, setOpen] = useState(false); // For mobile menu

  return (
    <div className="flex justify-between items-center mx-auto max-w-7xl px-4 sm:px-6 border-b-2 py-4">
      {/* Logo */}
      <Link href={"/"}>
        <h1 className="md:text-4xl text-2xl font-bold">
          Trend<span className="text-blue-500">Nest</span>
        </h1>
      </Link>

      {/* Desktop Navigation (Hidden on Small Screens) */}
      {/* <nav className="hidden lg:flex gap-12">
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className={`text-lg font-semibold ${
              pathname === link.href ? "text-blue-500" : "text-gray-600"
            } transition duration-300 hover:text-primary`}
          >
            {link.name}
          </Link>
        ))}
      </nav> */}
       <nav className="hidden gap-12 lg:flex 2xl:ml-16">
        {links.map((link, idx) => (
          <div key={idx}>
            {pathname === link.href ? (
              <Link
                className="text-lg text-blue-500 font-semibold"
                href={link.href}
              >
                {link.name}
              </Link>
            ) : (
              <Link
                href={link.href}
                className="text-lg font-semibold text-gray-600 transition duration-300 hover:text-primary"
              >
                {link.name}
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Right Section (Cart + Login/Logout) */}
      <div className="flex gap-4 items-center">
        {/* Shopping Cart Button */}
        <div className="relative">
          <Button
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:w-20 sm:h-18 md:w-24 md:h-20 "
            variant={"outline"}
            onClick={() => handleCartClick()}
          >
            <ShoppingBag />
            <span className="hidden text-xs font-semibold text-gray-600 sm:block">
              Cart
            </span>
          </Button>
          <span className="absolute top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {cartCount}
          </span>
        </div>

        {/* User Login/Signout Section */}
        <SignedOut>
          <SignInButton>
            <Button className="px-5 py-5 bg-[#3b82f6]">Login</Button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>

        {/* Mobile Menu Button (Hidden on Large Screens) */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button className="lg:hidden p-3" variant="ghost">
              <Menu className="w-8 h-8" />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="p-6">
            {/* ✅ Hidden Title (Fixes Error) */}
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">
                Trend<span className="text-blue-500">Nest</span>
              </h1>
              {/* <Button variant="ghost" onClick={() => setOpen(false)}>
                <X className="w-6 h-6" />
              </Button> */}
            </div>

            {/* Mobile Navigation */}
            <nav className="mt-6 flex flex-col gap-4">
              {links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-300 hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
