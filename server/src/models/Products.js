import { db } from "../db/config";

import { DataTypes } from "sequelize";

export const Products = db.define("Products", {
  name: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
  expiration_date: {
    type: DataTypes.DATE,
  },
  in_stock: {
    type: DataTypes.BOOLEAN,
  },
  city: {
    type: DataTypes.STRING,
  },
  purchase_date: {
    type: DataTypes.DATE,
  },
});
