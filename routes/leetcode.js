import express from "express";
export const router = express.Router();

const URL = "https://leetcode.com/graphql";

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
