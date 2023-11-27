import { db } from "../db/config";

import { DataTypes } from "sequelize";

export const Bags = db.define("Bags", {
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  expiration_date: {
    type: DataTypes.DATE,
  },
});
