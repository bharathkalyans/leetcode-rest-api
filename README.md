# LeetCode Public API 🚀


## Initialize

- Clone the repository `https://github.com/bharathkalyans/leetcode-rest-api.git` using command ``git clone https://github.com/bharathkalyans/leetcode-rest-api.git``
- Open the terminal, navigate to the package.json directory and run the command ``npm i`` or ``npm install`` to install all the dependencies.

## Running the Application

Run the application using the below command

```
nodemon app.js
```

- Visit `http://localhost:4000`



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


## End Points
LeetCode API end points to access the details of a User.

Following are the End points to be used locally only!! (Check above for the live end points!)

- User
    - POST  ``http://localhost:4000/user/`` 
    - POST ``http://localhost:4000/user/contests`` 
    - POST ``http://localhost:4000/user/solved`` 
    - POST ``http://localhost:4000/user/badges`` 
    - POST ``http://localhost:4000/user/activeyears``  
    - POST ``http://localhost:4000/user/submissions``  
- Leetcode
    - POST ``http://localhost:4000/leetcodetodaysquestion``  
    - POST ``http://localhost:4000/leetcodehistogram``  

All are POST requests ❗️