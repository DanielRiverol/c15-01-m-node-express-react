import { db } from "../db/config";

import { DataTypes } from "sequelize";

export const Category = db.define("Category", {
  name: {
    type: DataTypes.STRING,
  },
});
