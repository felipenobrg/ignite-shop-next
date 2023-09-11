import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey || typeof stripeSecretKey !== 'string') {
  throw new Error('Stripe secret key is missing or invalid.');
}

export const stripe = new Stripe(stripeSecretKey, {
    apiVersion: '2023-08-16',
    appInfo: {
        name: 'Ignite Shop',
    }
});