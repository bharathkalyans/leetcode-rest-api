export const contestRatingHistogramQuery = `
  query contestRatingHistogram {
    contestRatingHistogram {
      userCount
      ratingStart
      ratingEnd
      topPercentage
    }
  }
`;

export const questionOfTodayQuery = `
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
