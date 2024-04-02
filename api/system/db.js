const mysql = require("mysql");

const dbConfig = {
  connectionLimit: 10, // Adjust according to your needs
  host: "localhost",
  user: "root",
  password: "",
  database: "shiptaildb",
};

const pool = mysql.createPool(dbConfig);

const connectDB = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Error connecting to database:", err);
        reject(err);
        return;
      }
      console.log("Connected to MySQL database");
      resolve(connection);
    });
  });
};

module.exports = connectDB;
