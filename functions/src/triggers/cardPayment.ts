import * as functions from "firebase-functions";
import * as cors from "cors";

import {env} from "../services/Env";

import { PayService } from "../services/Pay";

export const listener = functions.https.onRequest(async (request, response) => {
  const config = env();
  const pay = new PayService(config.stripe.secret);
  return cors({ origin: "*" })(request, response, async () => {
    const body =
      typeof request.body === "string"
        ? JSON.parse(request.body)
        : request.body;

    response.json({
      data: await pay.withCard(body),
      success: true
    });
  });
});
