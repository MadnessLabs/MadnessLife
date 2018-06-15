import * as functions from "firebase-functions";
import * as cors from "cors";

import { TodoService } from "../services/Todo";

export const listener = functions.https.onRequest(async (request, response) => {
  const Todo = new TodoService();
  return cors({ origin: "*" })(request, response, async () => {
    const body =
      typeof request.body === "string"
        ? JSON.parse(request.body)
        : request.body;

    response.json(
      await Todo.add({
        task: body.task ? body.task : null
      })
    );
  });
});
