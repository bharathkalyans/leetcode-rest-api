import express from "express";
import fetchGraphQLData from "../utils/utility.js";
import {
  contestRatingHistogramQuery,
  questionOfTodayQuery,
} from "../queries/leetcodeGraphqlQueries.js";

export const router = express.Router();

// Histogram
router.post("/histogram", async (req, res) => {
  const query = contestRatingHistogramQuery;

  const variables = {
    username: req.body.username,
    limit: req.body.limit,
  };

  const data = await fetchGraphQLData(query, variables);
  res.send(data);
});

// Question of the Day
router.post("/todaysquestion", async (req, res) => {
  const query = questionOfTodayQuery;

  const variables = {
    username: req.body.username,
    limit: req.body.limit,
  };

  const data = await fetchGraphQLData(query, variables);
  res.send(data);
});

export default router;
