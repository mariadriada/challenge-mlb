
import { Secret } from "jsonwebtoken";
import path from "path";
import dotenv from "dotenv";

// Parsing the env file.
dotenv.config({ path: path.resolve(__dirname, "../.env") });

interface ENV {
    SECRET_KEY: Secret | undefined;
    USER_NAME: string | undefined;
    USER_LASTNAME: string | undefined;
    API_URL: string | undefined;
    SEARCH_ENDPOINT: string | undefined;
    ITEMS_ENDPOINT: string | undefined;
}

interface Config {
    SECRET_KEY: Secret;
    USER_NAME: string;
    USER_LASTNAME: string;
    API_URL: string;
    SEARCH_ENDPOINT: string;
    ITEMS_ENDPOINT: string 

}

// Loading process.env as ENV interface
const getConfig = (): ENV => {
  return {
    SECRET_KEY: process.env.SECRET_KEY,
    USER_NAME: process.env.USER_NAME,
    USER_LASTNAME: process.env.USER_LASTNAME,
    API_URL: process.env.API_URL,
    SEARCH_ENDPOINT: process.env.SEARCH_ENDPOINT,
    ITEMS_ENDPOINT: process.env.ITEMS_ENDPOINT,
  };
};

// Throwing an Error if any field was undefined we don't 
// If all is good return
const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in .env file`);
    }
  }
  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;
