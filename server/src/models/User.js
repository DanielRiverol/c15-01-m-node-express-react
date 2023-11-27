import { db } from "../db/config";

import { DataTypes } from "sequelize";

export const User = db.define("User", {
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "user",
  },
});
