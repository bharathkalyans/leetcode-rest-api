import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./routes/leetcode.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors(), bodyParser.json());

app.use("/graphql", router);

app.listen(PORT, () => {
  console.log(`🚀 Server is started at PORT : ${PORT}`);
});
