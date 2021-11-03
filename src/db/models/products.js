import { Sequelize } from "sequelize";

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
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  }, {
    // Other model options go here
  });