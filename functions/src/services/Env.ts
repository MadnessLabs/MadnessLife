/**
 * Get environment specific config variables
 * NOTE: When running locally they will be pulled from package.json under enjin key
 *       When running on a Firebase server it will use Firebase Functions environment variables
 * RESOURCES: https://firebase.google.com/docs/functions/config-env
 */
import * as functions from "firebase-functions";
import * as fs from "fs";

/**
 * Get the environment config object
 * @param key (Optional) The key of the config object to get
 */
export function envConfig(key?: string): any {
  let config = functions.config();

  if (Object.keys(config).length <= 0) {
    const packageJson = JSON.parse(
      fs.readFileSync(`${process.cwd()}/package.json`, "utf8")
    );
    config = packageJson.enjin ? packageJson.enjin : {};
    config.local = true;
  }

  return key ? config[key] : config;
}
