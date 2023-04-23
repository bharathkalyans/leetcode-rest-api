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

  const data = await fetchGraphQLData(query, { username });
  res.json(data);
});

//User Contest Rating
router.get("/:username/contests", async (req, res) => {
  const query = userRatingQuery;
  const { username } = req.params;

  const data = await fetchGraphQLData(query, { username });
  res.json(data);
});

//Problems Solved
router.get("/:username/solved", async (req, res) => {
  const query = problemsSolvedQuery;
  const { username } = req.params;

  const data = await fetchGraphQLData(query, { username });
  res.json(data);
});

//Badges
router.get("/:username/badges", async (req, res) => {
  const query = userBadgesQuery;
  const { username } = req.params;

  const data = await fetchGraphQLData(query, { username });
  res.json(data);
});

//Active Years
router.get("/:username/active-years", async (req, res) => {
  const query = activeYearsQuery;
  const { username } = req.params;
  const { year } = req.query;
  const data = await fetchGraphQLData(query, { username, year });
  res.json(data);
});

//Recent Submissions
router.get("/:username/submissions", async (req, res) => {
  const query = recentSubmissionsQuery;
  const { username } = req.params;
  let { limit } = req.query;
  if (!limit) limit = 3;

  const data = await fetchGraphQLData(query, { username, limit });
  res.json(data);
});

export default router;
