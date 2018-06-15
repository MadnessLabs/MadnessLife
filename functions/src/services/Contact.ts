/**
 * A service for dealing with contact functionality
 */
import * as admin from "firebase-admin";

import { envConfig } from "./Env";
import { DatabaseService } from "./Database";
import { MailService } from "./Mail";

export class ContactService {
  private mail: MailService;
  private db: DatabaseService;

  constructor() {
    const sendgridConfig = envConfig("sendgrid");
    this.db = new DatabaseService();
    this.mail = new MailService({ apiKey: sendgridConfig.key });
  }

  /**
   * Log contact submission to database
   * @param from The email address contact submission is from
   * @param message The message from the contact submission
   */
  async log(from: string, message: string) {
    return await this.db.add("inbox", {
      type: "contact",
      from,
      message,
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    });
  }

  /**
   * Send contact email to info@madnesslabs.net
   * @param from The email address contact submission is from
   * @param message The message from the contact submission
   */
  async sendEmail(from: string, message: string) {
    await this.log(from, message);
    return await this.mail.send({
      to: "info@madnesslabs.net",
      from,
      subject: `A new contact submission from ${from}`,
      html: message
    });
  }
}
