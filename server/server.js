import fs from "node:fs/promises";
import bodyParser from "body-parser";
import express from "express";

const app = express();

app.use(express.static("images"));
app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // allow all domains
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  next();
});

// app.get("/", async (req, res) => {
//   res.send("hi");
// });

app.get("/animals", async (req, res) => {
  const fileContent = await fs.readFile("./data/animals.json");

  const animalsData = JSON.parse(fileContent);

  res.status(200).json({ animals: animalsData });
});

app.get("/user-animals", async (req, res) => {
  const fileContent = await fs.readFile("./data/user-animals.json");

  const animals = JSON.parse(fileContent);

  res.status(200).json({ animals });
});

app.put("/user-animals", async (req, res) => {
  const animals = req.body.animals;

  await fs.writeFile("./data/user-animals.json", JSON.stringify(animals));

  res.status(200).json({ message: "User animals updated!" });
});

// 404
app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  res.status(404).json({ message: "404 - Not Found" });
});

app.listen(3000);
