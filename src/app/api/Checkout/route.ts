
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2025-01-27.acacia",
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { products,returnUrl } = body;

        if (!products || products.length === 0) {
            return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
        }

        const line_items = products.map((product: any) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: product.name,
                    images :[product.image],
                },
                unit_amount: product.price * 100,
            },
            quantity: product.quantity || 1,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items,
            mode: "payment",
            success_url: `${req.headers.get("origin")}/Success`,  // Custom success page
            cancel_url: `${req.headers.get("origin")}/cancel`, // Ensure returnUrl is always defined
            // cancel_url: `${req.headers.get("origin")}/Cancel?returnUrl=${encodeURIComponent(returnUrl)}`, // Custom cancel page with returnUrl
        });
        


        return NextResponse.json({ url: session.url });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json(
        { error: "Method Not Allowed" },
        { status: 405 }
    );

}


