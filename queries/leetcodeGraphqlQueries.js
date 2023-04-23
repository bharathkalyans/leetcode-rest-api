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

export const top100QuestionsQuery = `
query problemsetQuestionList(
	$categorySlug: String
	$limit: Int
	$skip: Int
	$filters: QuestionListFilterInput
) {
	problemsetQuestionList: questionList(
		categorySlug: $categorySlug
		limit: $limit
		skip: $skip
		filters: $filters
	) {
		total: totalNum
		questions: data {
			acRate
			difficulty
			freqBar
			frontendQuestionId: questionFrontendId
			isFavor
			paidOnly: isPaidOnly
			status
			title
			titleSlug
			topicTags {
				name
				id
				slug
			}
			hasSolution
			hasVideoSolution
		}
	}
}
`;
