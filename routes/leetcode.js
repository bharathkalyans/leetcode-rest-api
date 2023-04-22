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
  
  const variables = {
    username: username || '',
    limit: limit || 50,
  };

  const data = await fetchGraphQLData(query, variables);
  res.send(data);
});

// Question of the Day
router.get("/todaysquestion", async (req, res) => {
  const query = questionOfTodayQuery;
  
  const { username, limit } = req.query;

  const variables = {
    username: username || '',
    limit: limit || 50,
  };

  const data = await fetchGraphQLData(query, variables);
  res.send(data);
});

// Top 100 questions
router.get("/top-100", async (req, res) => {
  const query = top100QuestionsQuery;

  const { skip, limit } = req.query;
  
  const variables = {
    username: req.body.username,
    limit: req.body.limit,
    skip: skip || 0,
    limit: limit || 50,
    categorySlug: '',
    filters: {}
  };

  const data = await fetchGraphQLData(query, variables);
  res.send(data);
});

export default router;
