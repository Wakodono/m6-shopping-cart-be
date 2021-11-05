import { Sequelize } from "sequelize";

const { PGDATABASE, PGUSER, PGPASSWORD, PGHOST, PGPORT } = process.env;

const sequelize = new Sequelize(
  process.env.PGDATABASE, 
  process.env.PGUSER, 
  process.env.PGPASSWORD, {
  port: process.env.PGPORT,
  host: process.env.PGHOST,
  dialect: "postgres",
  dialectOptions: {
    require: true,
    rejectUnauthorized: false,
  }
});
console.log("instance of sequelize created");

/* const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    port: process.env.PORT,
    host: process.env.HOST,
    dialect: "postgres",
    dialectOptions: {         // IMPORTANT
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
); */


//Not mandatory. Simply tests the connection
export const testConnection = async () => {
  try {
    await sequelize.authenticate({});
    console.log("Connection has been established");
  } catch (error) {
    console.log("unable to establish connection", error);
  }
};

export const connectDB = async () => {
  try {
    console.log("syncronizes all tables in connectDB");
    await sequelize.sync({logging: false});
  } catch (error) {
    console.log(error);
  }
};

export default sequelize;
