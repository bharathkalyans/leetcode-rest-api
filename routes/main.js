import express from "express";
import { allRoutes } from "../utils/listAllRoutes.js";

let expressApp = undefined;

export default function configMainRoutes(app) {
  expressApp = app;
}

const mainRouter = express.Router();

mainRouter.get("", async (req, res) => {
  res.json(allRoutes(expressApp));
});

export { mainRouter };
