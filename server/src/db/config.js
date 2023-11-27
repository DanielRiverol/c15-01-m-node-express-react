import sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const db = new sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,

  {
    dialect: "mysql",
    host: process.env.DB_HOST,
  }
);

try {
  await db.authenticate();
  if (db.authenticate()) {
    console.log("Connection has been established successfully.");
  }
} catch (error) {
  console.log(error);
}
