import { db } from "../db/config";

import { DataTypes } from "sequelize";

export const SuperMarkets = db.define("SuperMarkets", {
    name: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
    },
})