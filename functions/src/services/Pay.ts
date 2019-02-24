import * as Stripe from 'stripe';

export class PayService {
  stripe: Stripe;

  constructor(stripeKey: string) {
    this.stripe = new Stripe(stripeKey); 
  }

  /**
   * This takes a payment with Stripe
   * @param payload Object of payment data
   */
  async cardPayment(payload: {token: string, amount: number}) {
    const charge = await this.stripe.charges.create({
      amount: payload.amount * 100,
      source: payload.token,
      currency: 'usd'
    });

    return { charge };
  }
}
