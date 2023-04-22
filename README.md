# LeetCode Public API 🚀

LeetCode API end points to access the details of a User.

Following are the End points

- List Routes
  - /list-routes (GET)
- User
  - user/ (POST)
  - user/contests (POST)
  - user/solved (POST)
  - user/badges (POST)
  - user/activeyears (POST)
  - users/submissions (POST)
- Leetcode
  - leetcode/todaysquestion (GET)
      - limit: number (QUERY_PARAMS)
      - username: string (QUERY_PARAMS)
  - leetcode/histogram (GET)
      - limit: number (QUERY_PARAMS)
      - username: string (QUERY_PARAMS)
  - leetcode/top-100 (GET)
      - limit: number (QUERY_PARAMS)
      - skip: number (QUERY_PARAMS)
