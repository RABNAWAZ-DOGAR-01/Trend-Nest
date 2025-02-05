import Link from "next/link";

export default function SuccessPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
            <h1 className="text-3xl font-bold text-green-600">Payment Successful 🎉</h1>
            <p className="text-gray-700 mt-2">Thank you for your purchase! Your order has been processed.</p>

            <Link href="/" className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-800">
                Go to Homepage
            </Link>
        </div>
    );
}
