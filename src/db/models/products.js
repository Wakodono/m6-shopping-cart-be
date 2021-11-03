import sequelize from "../index.js"
import s from "sequelize"

const { DataTypes } = s

/* {
    "id": 1,
    "name": "name",
    "category": STRING, 
    "image":"url(IMAGE LINK)",
    "price":FLOAT,
    "createdAt": "DATE",
    "updatedAt": "DATE",   
} */

const User = sequelize.define('User', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
      // allowNull defaults to true
    }
  }, {
    // Other model options go here (in new objct after comma)
    image: {
        type: DataTypes.STRING,
        isUrl: true
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      }
  });
  console.log("executes products.js")