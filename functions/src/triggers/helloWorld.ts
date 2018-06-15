import * as functions from "firebase-functions";
import * as cors from "cors";

import { ContactService } from "../services/Contact";

export const listener = functions.https.onRequest(async (request, response) => {
  const Contact = new ContactService();
  return cors({ origin: "*" })(request, response, async () => {
    const email = await Contact.sendEmail(
      request.body.data.from,
      request.body.data.message
    );
    response.json(email);
  });
});
