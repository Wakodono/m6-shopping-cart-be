import sequelize from "../index.js"
import s from "sequelize"
const { DataTypes } = s

/* {
    "id": 1,
    "text": TEXT,
    "username:STRING,
    "productId":FOREIGN KEY products
  
} */

const Review = sequelize.define('Review', {
    // Model attributes are defined here
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    }, 
    productId: {
        //ADD FOREIGN KEY HERE (Check docs for method)
    }
  })