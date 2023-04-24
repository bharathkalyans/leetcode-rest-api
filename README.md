# LeetCode Public API 🚀

## End Points

### Live URL's

- https://leetcode-public-api.onrender.com/
- https://leetcode-public-api.cyclic.app/

LeetCode API access end points :

- User

  - GET `user/`
  - GET `user/<user-name>/contests`
  - GET `user/<user-name>/solved`
  - GET `user/<user-name>/badges`
  - GET `user/<user-name>/active-years`
    - year: number [QUERY_PARAMS]
  - GET `user/<user-name>/submissions`
    - limit: number [QUERY_PARAMS]

- Leetcode

  - GET `leetcode/todays-question`
  - GET `leetcode/histogram`
  - GET `leetcode/top-100`
    - limit: number [QUERY_PARAMS]
    - skip: number [QUERY_PARAMS]

Examples

- User
  - <a href="https://leetcode-public-api.cyclic.app/user/bharathkalyans">
    https://leetcode-public-api.cyclic.app/user/bharathkalyans
      </a>
  - <a href="https://leetcode-public-api.cyclic.app/user/bharathkalyans/contests">
    https://leetcode-public-api.cyclic.app/user/bharathkalyans/contests
      </a>
  - <a href="https://leetcode-public-api.cyclic.app/user/bharathkalyans/solved">
    https://leetcode-public-api.cyclic.app/user/bharathkalyans/solved
      </a>
  - <a href="https://leetcode-public-api.cyclic.app/user/bharathkalyans/badges">
    https://leetcode-public-api.cyclic.app/user/bharathkalyans/badges
      </a>
  - <a href="https://leetcode-public-api.cyclic.app/user/bharathkalyans/active-years">
    https://leetcode-public-api.cyclic.app/user/bharathkalyans/active-years
      </a>
  - <a href="https://leetcode-public-api.cyclic.app/user/bharathkalyans/top-100">
    https://leetcode-public-api.cyclic.app/user/bharathkalyans/submissions
      </a>
- Public
  - <a href="https://leetcode-public-api.cyclic.app/leetcode/todays-question">
    https://leetcode-public-api.cyclic.app/leetcode/todays-question
      </a>
  - <a href="https://leetcode-public-api.cyclic.app/leetcode/histogram">
    https://leetcode-public-api.cyclic.app/leetcode/histogram
      </a>
  - <a href="https://leetcode-public-api.cyclic.app/leetcode/todays-question">
    https://leetcode-public-api.cyclic.app/leetcode/top-100
      </a>

# Build ⚒️

## Initialize

- Clone the repository `https://github.com/bharathkalyans/leetcode-rest-api.git` using command `git clone https://github.com/bharathkalyans/leetcode-rest-api.git`
- Open the terminal, navigate to the package.json directory and run the command `npm i` or `npm install` to install all the dependencies.

## Running the Application

Run the application using the below command

```
npm start
```

- Visit `http://localhost:4000` for local server access.

## File Structure

```
/.
  /app.js
  /routes
    /leetcode.js
    /userInfo.js
    /error.js
    /mainRoutes.js
  /queries
    /leetcodeGraphqlQueries.js
    /userGraphqlQueries.js
  /utils
    /constants.js
    /listRoutes.js
    /utility.js

```

# Open Source Contribution 🎒

## How to contribute?

### What do you need to get started?

#### Latest version of Node JS, idea of how a REST API works and a bit of googling skills 😉.

- All contributions are welcome 🙌🏼
- Open an issue first, get yourself assigned before working on it and describe changes made properly and attach supporting Snapshots in the PR.

#### Contributors

- <a href="https://github.com/bharathkalyans">**Bharath Kalyan S**</a> ~ Author
- <a href="https://github.com/07prajwal2000">**Prajwal Aradhya**</a> <br>

# Sponsor ❤️

- Do consider sponsoring ❤️ us to Support this project so that we can cover the costs of the server.
- You can also support this project by starring the repository, contributing through refactoring the code or updating the documentation as well.

If interested in sponsoring, visit the <a href="https://github.com/bharathkalyans">**Author's**</a> profile page to Sponsor directly.
<br>

## Thank you for visiting our page 😀
