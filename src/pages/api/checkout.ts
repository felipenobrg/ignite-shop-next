import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const priceId = ''

    const sucessUrl = `${process.env.NEXT_URL}/sucess`
    const cancel_url = `${process.env.NEXT_URL}/`

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: sucessUrl,
        cancel_url: cancel_url,
        mode: "payment",
        line_items: [
            {
                price: priceId,
                quantity: 1,
            }
        ]
    })
}