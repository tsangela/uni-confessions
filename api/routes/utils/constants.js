require("dotenv").config();

const CONNECTION_STRING = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@sandbox-wz7vl.mongodb.net/Sandbox?retryWrites=true&w=majority`;

const DB_NAME = "messageBoard";

const AGE_RANGES = ["< 18", "18-24", "25-34", "35-44", "45-54", "55+"];

const UNIVERSITIES = ["bcit", "sfu", "ubc", "uvic", "other"];

module.exports = {
  CONNECTION_STRING,
  DB_NAME,
  AGE_RANGES,
  UNIVERSITIES,
};
