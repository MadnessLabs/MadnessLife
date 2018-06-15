import * as admin from "firebase-admin";
import * as fs from "fs";

import { ContactService } from "../services/Contact";
import { envConfig } from "../services/Env";

const config = envConfig();

const serviceAccountKey = JSON.parse(
  fs.readFileSync(process.cwd() + "/serviceAccountKey.json", "utf8")
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
  databaseURL: `https://${config.project}.firebaseio.com`,
  storageBucket: `${config.project}.appspot.com`
});

describe("Madness Labs", () => {
  jest.setTimeout(30000);

  const Contact = new ContactService();

  it("Should send contact submission", async () => {
    const email = await Contact.sendEmail(
      "bobby@madnesslabs.net",
      "This is a test!"
    );

    console.log(email[0].statusCode);

    expect(email).toBeTruthy();
  });
});
