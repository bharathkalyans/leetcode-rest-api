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
router.get("/:username", async (req, res) => {
  const query = userProfileQuery;
  const { username } = req.params;
  const variables = {
    username: username,
  };

  const data = await fetchGraphQLData(query, variables);
  res.send(data);
});

//User Contest Rating
router.get("/:username/contests", async (req, res) => {
  const query = userRatingQuery;
  const { username } = req.params;
  const variables = {
    username: username,
  };

  const data = await fetchGraphQLData(query, variables);
  res.send(data);
});

//Problems Solved
router.get("/:username/solved", async (req, res) => {
  const query = problemsSolvedQuery;
  const { username } = req.params;
  const variables = {
    username: username,
  };

  const data = await fetchGraphQLData(query, variables);
  res.send(data);
});

//Badges
router.get("/:username/badges", async (req, res) => {
  const query = userBadgesQuery;
  const { username } = req.params;
  const variables = {
    username: username,
  };

  const data = await fetchGraphQLData(query, variables);
  res.send(data);
});

//Active Years
router.get("/:username/activeyears", async (req, res) => {
  const query = activeYearsQuery;
  const { username } = req.params;
  const variables = {
    username: username,
  };

  const data = await fetchGraphQLData(query, variables);
  res.send(data);
});

//Recent Submissions
router.get("/:username/submissions", async (req, res) => {
  const query = recentSubmissionsQuery;
  const { username } = req.params;
  const { limit } = req.query;
  const variables = {
    username: username,
    limit: limit,
  };

  const data = await fetchGraphQLData(query, variables);
  res.send(data);
});

export default router;
