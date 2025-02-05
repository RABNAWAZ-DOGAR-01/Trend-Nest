import Newest from "@/components/Newest";
import Link from "next/link";

export default function CancelPage() {
    return (
      <div className="mt-4">
        <div className=" text-center">
          <h1 className="text-3xl font-bold text-red-600">Payment Canceled</h1>
          <p className="mt-4 text-lg">It seems you canceled the payment.</p>
          <Link href="/" className="mt-4 text-blue-500 font-md py-2 px-6 rounded-md">
            Go Back to Shop
          </Link>
        </div>
        <div>
            <Newest/>
        </div>
      </div>
    );
  }
  