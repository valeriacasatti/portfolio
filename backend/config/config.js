import dotenv from "dotenv";
dotenv.config();

export const config = {
  server: {
    port: process.env.PORT || 8080,
  },
  gmail: {
    account: process.env.GMAIL_ACCOUNT,
    password: process.env.GMAIL_PASSWORD,
  },
};
