const connectDB = require("../system/db");

const LOCAL_TIMEZONE = "Africa/Lagos";

function getTimeOffset() {
  const dateTimeServer = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
  });
  const dateTimeClient = new Date().toLocaleString("en-US", {
    timeZone: LOCAL_TIMEZONE,
  });
  return (
    new Date(dateTimeClient).getTimezoneOffset() -
    new Date(dateTimeServer).getTimezoneOffset()
  );
}

class Model {
  constructor() {}

  async _withDBConnection(callback) {
    try {
      const connection = await connectDB();
      const result = await callback(connection);
      connection.release(); // Release the connection back to the pool
      return result;
    } catch (error) {
      console.error("Error with database connection:", error);
      throw error;
    }
  }

  async get_user_password(email, password) {
    // Example usage of the imported database connection
    const connection = await connectDB();
    const user = await db.query(
      "SELECT password FROM tbl_users WHERE email = ? AND password = ?",
      [email, password]
    );
    // Process the result and return
    return user[0];
    connection.release();
  }

  async get_user_recovery_pin(email) {
    // Implement your method logic here
  }

  async get_user(email, password) {
    return this._withDBConnection(async (connection) => {
      const query = "SELECT * FROM tbl_users WHERE email = ? AND password = ?";
      const result = await connection.query(query, [email, password]);
      return result[0]; // Assuming the query returns one row
    });
  }

  async get_user_details(user) {
    // Implement your method logic here
  }

  // Other methods...

  async check_events() {
    // Implement your method logic here
  }
}

const model = new Model();

module.exports = model;
