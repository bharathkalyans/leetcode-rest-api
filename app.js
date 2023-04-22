import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./routes/userInfo.js";
import leetcodeRouter from "./routes/leetcode.js";
import expressListRoutes from "./listRoutes.js";
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors(), bodyParser.json());


app.use("/leetcode", leetcodeRouter);

app.use("/user", router);

const allRoutes = expressListRoutes(app).map(x => {
  return {
    method: x.method,
    path: x.path.replaceAll('\\', '/')
  }
});

app.get('/', async (req, res) => {
  res.sendFile(path.join(path.resolve(), './static/routes.html'));
});

app.get("/list-routes", async (req, res) => {
  res.send(allRoutes);
});

app.listen(PORT, () => {
  console.log(`🚀 Server is started at PORT : ${PORT}`);
});