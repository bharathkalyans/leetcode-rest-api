import dotenv from "dotenv";
dotenv.config();

import express, { json } from "express";
import cors from 'cors';
import { users } from "./FakeData.js";

const app = express();
const port = process.env.PORT || 3003;

app.use(json(), cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
