import * as admin from "firebase-admin";
import * as fs from "fs";

import { env } from "../services/Env";
import { TodoService } from "../services/Todo";

const config = env();

const serviceAccountKey = JSON.parse(
  fs.readFileSync(process.cwd() + "/serviceAccountKey.json", "utf8")
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
  databaseURL: `https://${config.project}.firebaseio.com`,
  storageBucket: `${config.project}.appspot.com`
});

const Todo = new TodoService();

describe("Todo Service", () => {
  jest.setTimeout(30000);

  it("should load", async () => {
    expect(Todo).toBeTruthy();
  });

  it("should add a todo", async () => {
    const task = await Todo.add({
      task: "Buy Almond Milk"
    });

    expect(task).toBeTruthy();
  });
});
