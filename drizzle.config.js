import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./configs/schema.js",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://formai_owner:3xIFh2jqckPR@ep-twilight-mouse-a57ezv8e.us-east-2.aws.neon.tech/formai?sslmode=require"
    ,
  }
});