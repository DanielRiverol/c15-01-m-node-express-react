import { db } from "../db/config";

import { DataTypes } from "sequelize";

export const Customer = db.define("Customer", {
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING,
  },
});
