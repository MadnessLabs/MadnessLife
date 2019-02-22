import { DatabaseService } from "../services/Database";
import * as Stripe from "stripe";

export class PayService {
  private db: DatabaseService = new DatabaseService();
  private stripe: Stripe;

  constructor(stripeSecretKey: string) {
    this.stripe = new Stripe(stripeSecretKey);
  }

  async withCard(payload: {amount: number, token: string}) {
    const charge = await this.stripe.charges.create({
      amount: payload.amount * 100,
      source: payload.token,
      currency: 'usd'
    });

    return { charge };
  }
}
