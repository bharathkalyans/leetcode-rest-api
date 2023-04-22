import express from "express";
import fetchGraphQLData from "../utils/utility.js";

export const router = express.Router();

// User Profile
router.post("/", async (req, res) => {
  const query = `
query userPublicProfile($username: String!) {
    matchedUser(username: $username) {
        username
        githubUrl
        twitterUrl
        linkedinUrl
        profile {
            ranking
            userAvatar
            realName
            aboutMe
            school
            websites
            countryName
            company
            jobTitle
            skillTags
            postViewCount
            postViewCountDiff
            reputation
            reputationDiff
            solutionCount
            solutionCountDiff
            categoryDiscussCount
            categoryDiscussCountDiff
        }
        languageProblemCount {
          languageName
          problemsSolved
        }
    }
}
`;

  const variables = {
    username: req.body.username,
  };

  const data = await fetchGraphQLData(query, variables);
  res.send(data);
});

//User Contest Rating
router.post("/contests", async (req, res) => {
  const query = `
  query userContestRankingInfo($username: String!) {
    userContestRanking(username: $username) {
      attendedContestsCount
      rating
      globalRanking
      totalParticipants
      topPercentage
      badge {
        name
      }
    }
    userContestRankingHistory(username: $username) {
      attended
      trendDirection
      problemsSolved
      totalProblems
      finishTimeInSeconds
      rating
      ranking
      contest {
        title
        startTime
      }
    }
  }
`;

  const variables = {
    username: req.body.username,
  };

  const data = await fetchGraphQLData(query, variables);
  res.send(data);
});

//Problems Solved
router.post("/solved", async (req, res) => {
  const query = `
  query userProblemsSolved($username: String!) {
    allQuestionsCount {
      difficulty
      count
    }
    matchedUser(username: $username) {
      problemsSolvedBeatsStats {
        difficulty
        percentage
      }
      submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
        }
      }
    }
  }
`;

  const variables = {
    username: req.body.username,
  };

  const data = await fetchGraphQLData(query, variables);
  res.send(data);
});

//Badges
router.post("/badges", async (req, res) => {
  const query = `
  query userBadges($username: String!) {
    matchedUser(username: $username) {
      badges {
        id
        name
        shortName
        displayName
        icon
        hoverText
        medal {
          slug
          config {
            iconGif
            iconGifBackground
          }
        }
        creationDate
        category
      }
      upcomingBadges {
        name
        icon
        progress
      }
    }
  }
`;

  const variables = {
    username: req.body.username,
  };

  const data = await fetchGraphQLData(query, variables);
  res.send(data);
});

//Active Years
router.post("/activeyears", async (req, res) => {
  const query = `
  query userProfileCalendar($username: String!, $year: Int) {
    matchedUser(username: $username) {
      userCalendar(year: $year) {
        activeYears
        streak
        totalActiveDays
        dccBadges {
          timestamp
          badge {
            name
            icon
          }
        }
        submissionCalendar
      }
    }
  }
`;

  const variables = {
    username: req.body.username,
  };

  const data = await fetchGraphQLData(query, variables);
  res.send(data);
});

//Recent Submissions
router.post("/submissions", async (req, res) => {
  const query = `
  query recentAcSubmissions($username: String!, $limit: Int!) {
    recentAcSubmissionList(username: $username, limit: $limit) {
      id
      title
      titleSlug
      timestamp
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
