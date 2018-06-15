import * as functions from "firebase-functions";
import * as cors from "cors";

export const listener = functions.https.onRequest(async (request, response) => {
  return cors({ origin: "*" })(request, response, async () => {
    response.json({ data: "Hello World! ^_^" });
  });
});
