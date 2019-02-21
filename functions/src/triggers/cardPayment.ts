import * as functions from "firebase-functions";
import * as cors from "cors";

import { PayService } from "../services/Pay";

export const listener = functions.https.onRequest(async (request, response) => {
  const pay = new PayService();
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
