import { DatabaseService } from "../services/Database";
import * as Stripe from "stripe";

export class PayService {
  private db: DatabaseService = new DatabaseService();
  private stripe: Stripe.Stripe;

  constructor(stripeSecretKey: string) {
    this.stripe = new Stripe(stripeSecretKey);
  }

  async withCard(payload: any) {
    return payload;
  }
}
