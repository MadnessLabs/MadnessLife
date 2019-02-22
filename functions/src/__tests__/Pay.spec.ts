import * as admin from "firebase-admin";
import * as fs from "fs";

import { env } from "../services/Env";
import { PayService } from "../services/Pay";

const config = env();

const serviceAccountKey = JSON.parse(
  fs.readFileSync(process.cwd() + "/serviceAccountKey.json", "utf8")
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
  databaseURL: `https://${config.project}.firebaseio.com`,
  storageBucket: `${config.project}.appspot.com`
});

const Pay = new PayService(config.stripe.secret);

describe("Pay Service", () => {
  jest.setTimeout(30000);

  it("should load", async () => {
    expect(Pay).toBeTruthy();
  });

  it("should take payment with a card", async () => {
    const payment = await Pay.withCard({
      token: "tok_1E6WlvKwCNOJpgzx5oqQGrNA",
      amount: 100
    });

    console.log(payment);

    expect(payment).toBeTruthy();
  });
});
