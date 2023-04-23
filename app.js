import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRouter from "./routes/userInfo.js";
import leetcodeRouter from "./routes/leetcode.js";
import errorRouter from "./routes/error.js";
import configMainRoutes, { mainRouter } from "./routes/main.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

configMainRoutes(app);

app.use(cors(), bodyParser.json());

app.use("/leetcode", leetcodeRouter);

app.use("/user", userRouter);

app.use("/", mainRouter);

app.use("*", errorRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server is started at PORT : ${PORT}`);
});
