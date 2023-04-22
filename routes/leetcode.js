import express from "express";
import { BASE_URL } from "../utils/constants.js";
import fetchGraphQLData from "../utils/utility.js";
export const router = express.Router();

const URL = BASE_URL;

// const fetchGraphQLData = async (query, variables) => {
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       query,
//       variables,
//     }),
//   };

//   try {
//     const response = await fetch(URL, options);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// Histogram
router.post("/histogram", async (req, res) => {
  const query = `
      query contestRatingHistogram {
          contestRatingHistogram {
            userCount
            ratingStart
            ratingEnd
            topPercentage
          }
        }
    `;

  const variables = {
    username: req.body.username,
    limit: req.body.limit,
  };

  const data = await fetchGraphQLData(query, variables);
  res.send(data);
});

// Question of the Day
router.post("/todaysquestion", async (req, res) => {
  const query = `
    query questionOfToday {
      activeDailyCodingChallengeQuestion {
        date
        userStatus
        link
        question {
          acRate
          difficulty
          freqBar
          frontendQuestionId: questionFrontendId
          isFavor
          paidOnly: isPaidOnly
          status
          title
          titleSlug
          hasVideoSolution
          hasSolution
          topicTags {
            name
            id
            slug
          }
        }
      }
    }
    `;

  const variables = {
    username: req.body.username,
    limit: req.body.limit,
  };

  const data = await fetchGraphQLData(query, variables);
  res.send(data);
});

export default router;
