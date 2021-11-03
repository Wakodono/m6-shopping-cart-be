import { Sequelize } from "sequelize";

const { PGDATABASE, PGUSER, PGPASSWORD, PGHOST, PGPORT } = process.env;

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  host: PGHOST,
  port: PGPORT,
  dialect: "postgres",
});
console.log("instance of sequelize created");


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
    await sequelize.sync();
  } catch (error) {
    console.log(error);
  }
};

export default sequelize;
