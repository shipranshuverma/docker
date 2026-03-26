const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
  host: "mysql",   // IMPORTANT (service name)
  user: "root",
  password: "password",
  database: "testdb"
});

db.connect(err => {
  if (err) {
    console.log("DB connection failed:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

app.get("/", (req, res) => {
  res.send("Node connected to MySQL 🚀");
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
});

app.listen(3000, "0.0.0.0") () => {
  console.log("Server running on port 3000");
});
