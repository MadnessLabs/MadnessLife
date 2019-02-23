/**
 * Get environment specific config variables
 * NOTE: When running locally they will be pulled from environment.json under enjin key
 *       When running on a Firebase server it will use Firebase Functions environment variables
 * RESOURCES: https://firebase.google.com/docs/functions/config-env
 */
import * as functions from "firebase-functions";
import * as fs from "fs";

/**
 * Get the environment config object
 * @param key (Optional) The key of the config object to get
 */
export function env(key?: string): any {
  let config = functions.config();

  if (Object.keys(config).length <= 0) {
    const environment = JSON.parse(
      fs.readFileSync(`${process.cwd()}/environment.json`, "utf8")
    );
    config = environment ? environment : {};
    config.local = true;
  }

  return key ? config[key] : config;
}