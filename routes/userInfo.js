import express from "express";
import fetchGraphQLData from "../utils/utility.js";
import {
  userProfileQuery,
  userRatingQuery,
  problemsSolvedQuery,
  userBadgesQuery,
  activeYearsQuery,
  recentSubmissionsQuery,
} from "../queries/userGraphqlQueries.js";

export const router = express.Router();

// User Profile
router.get("/", async (req, res) => {
  const query = userProfileQuery;

  const variables = {
    username: req.body.username,
  };

  const data = await fetchGraphQLData(query, variables);
  res.send(data);
});

//User Contest Rating
router.get("/contests", async (req, res) => {
  const query = userRatingQuery;

  const variables = {
    username: req.body.username,
  };

  const data = await fetchGraphQLData(query, variables);
  res.send(data);
});

//Problems Solved
router.get("/solved", async (req, res) => {
  const query = problemsSolvedQuery;

  const variables = {
    username: req.body.username,
  };

  const data = await fetchGraphQLData(query, variables);
  res.send(data);
});

//Badges
router.get("/badges", async (req, res) => {
  const query = userBadgesQuery;

  const variables = {
    username: req.body.username,
  };

  const data = await fetchGraphQLData(query, variables);
  res.send(data);
});

//Active Years
router.get("/activeyears", async (req, res) => {
  const query = activeYearsQuery;

  const variables = {
    username: req.body.username,
  };

  const data = await fetchGraphQLData(query, variables);
  res.send(data);
});

//Recent Submissions
router.get("/submissions", async (req, res) => {
  const query = recentSubmissionsQuery;

  const variables = {
    username: req.body.username,
    limit: req.body.limit,
  };

  const data = await fetchGraphQLData(query, variables);
  res.send(data);
});

export default router;
