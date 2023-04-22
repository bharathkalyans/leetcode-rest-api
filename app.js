import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./routes/userInfo.js";
import leetcodeRouter from "./routes/leetcode.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors(), bodyParser.json());

app.use("/user", router);

app.use("/leetcode", leetcodeRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server is started at PORT : ${PORT}`);
});
