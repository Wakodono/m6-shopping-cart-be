import sequelize from "../index.js"
import s from "sequelize"
import Product from "./products.js"
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
        type: DataTypes.INTEGER,

        references: {
            // This is a reference to another model
            model: Product,
      
            // This is the column name of the referenced model
            key: 'id',
          }
    }
  })

  export default Review