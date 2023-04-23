import express from "express";
import fetchGraphQLData from "../utils/utility.js";
import {
  contestRatingHistogramQuery,
  questionOfTodayQuery,
  top100QuestionsQuery,
} from "../queries/leetcodeGraphqlQueries.js";

export const router = express.Router();

// Histogram
router.get("/histogram", async (req, res) => {
  const query = contestRatingHistogramQuery;

  const { username, limit } = req.query;

  const data = await fetchGraphQLData(query, { username, limit });
  res.json(data);
});

// Question of the Day
router.get("/todays-question", async (req, res) => {
  const query = questionOfTodayQuery;

  const { username = "", limit = 50 } = req.query;

  const data = await fetchGraphQLData(query, { username, limit });
  res.json(data);
});

// Top 100 questions
router.get("/top-100", async (req, res) => {
  const query = top100QuestionsQuery;

  const { skip = 0, limit = 50, categorySlug = "", filters = {} } = req.query;

  const data = await fetchGraphQLData(query, {
    skip,
    limit,
    categorySlug,
    filters,
  });
  res.json(data);
});

export default router;
