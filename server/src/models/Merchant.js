import { db } from "../db/config";

import { DataTypes } from "sequelize";

export const Merchant = db.define("Merchant", {
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
