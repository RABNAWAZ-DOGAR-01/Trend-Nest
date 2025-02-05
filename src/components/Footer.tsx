import { Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold">TrendNest</h2>
          <p className="mt-3 text-gray-400">Your one-stop shop for the latest fashion trends.</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/faq">FAQs</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-xl font-semibold">Customer Support</h3>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li><Link href="/shipping">Shipping & Delivery</Link></li>
            <li><Link href="/returns">Returns & Refunds</Link></li>
            <li><Link href="/terms">Terms & Conditions</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social Media & Newsletter */}
        <div>
          <h3 className="text-xl font-semibold">Stay Connected</h3>
          <div className="flex space-x-4 mt-3">
            <Link href="#" className="text-gray-400 hover:text-white"><Facebook /></Link>
            <Link href="#" className="text-gray-400 hover:text-white"><Twitter /></Link>
            <Link href="#" className="text-gray-400 hover:text-white"><Instagram /></Link>
          </div>
          <h3 className="text-xl font-semibold mt-5">Subscribe to our Newsletter</h3>
          <form className="mt-3 flex space-x-2">
            <input type="email" placeholder="Enter your email" className="w-full p-2 rounded-md text-gray-900" />
            <button className="bg-green-600 hover:bg-green-800 px-4 py-2 rounded-md text-white">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} TrendNest. All rights reserved.
      </div>
    </footer>
  );
}
