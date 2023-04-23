import express from "express";
import {allRoutes} from '../utils/listRoutes.js';

let expressApp = undefined;

/**
 * 
 * @param {express.Application} app 
 */
export default function configMainRoutes(app) {
  expressApp = app;
};

const mainRouter = express.Router();

mainRouter.get("/list-endpoints", async (req, res) => {
  res.send(allRoutes(expressApp));
});

export { mainRouter };