import express from "express";
export const router = express.Router();

const URL = "https://leetcode.com/graphql";

//Histogram
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

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  };

  try {
    const response = await fetch(URL, options);
    const data = await response.json();
    // console.log(data);
    res.send(data);
  } catch (error) {
    console.error(error);
  }
});

//Question of the Day
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

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  };

  try {
    const response = await fetch(URL, options);
    const data = await response.json();
    // console.log(data);
    res.send(data);
  } catch (error) {
    console.error(error);
  }
});

export default router;
