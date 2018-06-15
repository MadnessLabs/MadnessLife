/**
 * A simple wrapper around Sendgrid to send emails
 * RESOURCES: https://firebase.google.com/docs/firestore/quickstart
 */
import * as sendgrid from "@sendgrid/mail";
import { ClientResponse } from "@sendgrid/client/src/response";
import { MailData } from "@sendgrid/helpers/classes/mail";
import { ResponseError } from "@sendgrid/helpers/classes";

export class MailService {
  private service: {
    /**
     * API key pass through for convenience
     */
    setApiKey(apiKey: string): void;

    /**
     * Set substitution wrappers
     */
    setSubstitutionWrappers(left: string, right: string): void;

    /**
     * Send email
     */
    send(
      data: MailData,
      isMultiple?: boolean,
      cb?: (err: Error | ResponseError, result: [ClientResponse, {}]) => void
    ): Promise<[ClientResponse, {}]>;
  };

  constructor(options: { apiKey: string }) {
    if (!options || !options.apiKey) {
      throw new Error("An apiKey is required to interact with SendGrid!");
    }

    sendgrid.setApiKey(options.apiKey);
    this.service = sendgrid;
  }

  /**
   * Send an email with Sendgrid
   * @param mailOptions Sendgrid email sending options
   */
  send(mailOptions: MailData): Promise<[ClientResponse, {}]> {
    return this.service.send(mailOptions);
  }
}
