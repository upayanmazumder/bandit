import path from "path";
import dotenv from "dotenv";
import { log } from "../utils/logging/logger";

dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

const REQUIRED_ENV_VARS = [
  "MONGO_URI",
  "SESSION_SECRET",
  "NEXTAUTH_SECRET",
  "GOOGLE_CLIENT_ID",
  "GOOGLE_CLIENT_SECRET",
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "SMTP_FROM",
];

const env = {
  // Node environment (development, production, etc.)
  NODE_ENV: process.env.NODE_ENV || "development",

  // MongoDB connection string
  MONGO_URI: process.env.MONGO_URI,

  // Frontend URL (used for CORS, redirects, etc.)
  FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:3000",

  // Session and authentication secrets
  SESSION_SECRET: process.env.SESSION_SECRET,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,

  // OAuth credentials for Google
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,

  // SMTP configuration for sending emails
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASS: process.env.SMTP_PASS,
  SMTP_FROM: process.env.SMTP_FROM,
  CUSTOM_DOMAIN: process.env.CUSTOM_DOMAIN || "app.example.com",
};

const missingVars = REQUIRED_ENV_VARS.filter(
  (key) => !env[key as keyof typeof env]
);
if (missingVars.length > 0) {
  log({
    type: "error",
    message: `Missing required environment variables: ${missingVars.join(
      ", "
    )}`,
  });
  throw new Error(
    `Missing required environment variables: ${missingVars.join(", ")}`
  );
}

export default env;
