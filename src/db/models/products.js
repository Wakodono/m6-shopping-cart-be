import sequelize from "../index.js";
import s from "sequelize";

const { DataTypes } = s;

/* {
    "id": 1,
    "name": "name",
    "category": STRING, 
    "image":"url(IMAGE LINK)",
    "price":FLOAT,
    "createdAt": "DATE",
    "updatedAt": "DATE",   
} */

const Product = sequelize.define(
  "Product",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
    image: {
      type: DataTypes.STRING,
      isUrl: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    timestamps: true,
  }
);
console.log("executes products.js");

export default Product;
