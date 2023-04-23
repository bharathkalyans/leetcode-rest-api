# LeetCode Public API 🚀

## End Points
LeetCode API access end points :

- User
  - GET  ``user/``
  - GET ``user/<user-name>/contests``
  - GET ``user/<user-name>/solved``
  - GET ``user/<user-name>/badges``
  - GET ``user/<user-name>/active-years``
  - GET ``user/<user-name>/submissions``

- Leetcode
  - GET `leetcode/todays-question`
    - limit: number [QUERY_PARAMS]
    - username: string [QUERY_PARAMS]
  - GET `leetcode/histogram`
    - limit: number [QUERY_PARAMS]
    - username: string [QUERY_PARAMS]
  - GET `leetcode/top-100`
    - limit: number [QUERY_PARAMS]
    - skip: number [QUERY_PARAMS]


## Initialize

- Clone the repository `https://github.com/bharathkalyans/leetcode-rest-api.git` using command ``git clone https://github.com/bharathkalyans/leetcode-rest-api.git``
- Open the terminal, navigate to the package.json directory and run the command ``npm i`` or ``npm install`` to install all the dependencies.

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
  /queries
    /leetcodeGraphqlQueries.js
    /userGraphqlQueries.js
  /utils
    /constants.js
    /utility.js
    
```



## How to contribute?
### What do you need to get started?
#### Latest version of Node JS, idea of how a REST API works and a bit of googling skills 😉. 
- All contributions are welcome 🙌🏼
- Open an issue first, get yourself assigned before working on it and  describe changes made properly and attach supporting Snapshots in the PR. 

## Contributors
* <a href="https://github.com/bharathkalyans">**Bharath Kalyan S**</a> <br>
* <a href="https://github.com/07prajwal2000">**Prajwal Aradhya**</a> <br>

## Author
<a href="https://github.com/bharathkalyans">**Bharath Kalyan S**</a> <br>