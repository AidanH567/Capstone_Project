import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Ensure this is your correct MySQL username
  password: "Aidsdawg0071!", // Ensure this is your correct MySQL password
  database: "blog",
});
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to the database.");
});
